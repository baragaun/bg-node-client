import { BgListenerTopic, CachePolicy, MultiStepActionEventType, MultiStepActionResult, MultiStepActionSendNotificationResult, MultiStepActionType, } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { MultiStepActionRun } from '../../models/MultiStepActionRun.js';
import findMyUser from '../myUser/findMyUser.js';
const failureResults = [
    MultiStepActionResult.confirmTokenMismatch,
    MultiStepActionResult.dataValidationFailed,
    MultiStepActionResult.deviceNotFound,
    MultiStepActionResult.emailMismatch,
    MultiStepActionResult.emailNotVerified,
    MultiStepActionResult.error,
    MultiStepActionResult.expired,
    MultiStepActionResult.invalidEmail,
    MultiStepActionResult.missingEmail,
    MultiStepActionResult.missingPhoneNumber,
    MultiStepActionResult.notFound,
    MultiStepActionResult.passwordMismatch,
    MultiStepActionResult.passwordUpdated,
    MultiStepActionResult.phoneNumberInvalid,
    MultiStepActionResult.phoneNumberMismatch,
    MultiStepActionResult.phoneNumberNotVerified,
    MultiStepActionResult.systemError,
    MultiStepActionResult.userFailedValidation,
    MultiStepActionResult.userNotFound,
    MultiStepActionResult.userNotSignedIn,
];
const getMultiStepActionProgress = async (actionId, confirmToken, queryOptions) => {
    if (!libData.isInitialized()) {
        logger.error('getMultiStepActionProgress: unavailable');
        return { error: 'unavailable' };
    }
    logger.debug('getMultiStepActionProgress called.', { actionId, confirmToken, queryOptions });
    const clientInfo = libData.clientInfoStore().clientInfo;
    const result = {};
    try {
        const response = await fsdata.multiStepAction.getMultiStepActionProgress(actionId, confirmToken);
        if (response.error || !response.object) {
            logger.error('getMultiStepActionProgress: received error.', { actionId, confirmToken });
            result.error = 'not-found';
            return result;
        }
        logger.debug('getMultiStepActionProgress: received progress.', { response });
        let run = libData.multiStepActionRun(response.object.actionId);
        const previousProgress = run?.actionProgress;
        const actionProgress = response.object;
        const actionHasFinished = actionProgress.result &&
            actionProgress.result !== MultiStepActionResult.unset;
        const actionHasExpired = actionProgress.expiresAt &&
            new Date(actionProgress.expiresAt).getTime() < Date.now();
        if (run) {
            run.actionProgress = actionProgress;
            if (confirmToken) {
                run.confirmToken = confirmToken;
            }
            if (run.isStopped()) {
                logger.debug('getMultiStepActionProgress: run has been aborted.', { run });
                if (!run.pollingFinishedAt && !run.finished) {
                    logger.debug('getMultiStepActionProgress: run has not yet been finished.', { run });
                    if (run.timeoutRef) {
                        clearTimeout(run.timeoutRef);
                        run.timeoutRef = undefined;
                    }
                    run.pollingFinishedAt = new Date();
                    run.onEventReceived(MultiStepActionEventType.other);
                    libData.removeMultiStepActionRun(actionProgress.actionId);
                    result.object = {
                        id: actionProgress.actionId,
                        actionProgress: actionProgress,
                        run,
                        createdAt: actionProgress.createdAt,
                        error: 'polling-stopped',
                    };
                }
                return result;
            }
        }
        else {
            logger.debug('getMultiStepActionProgress: creating a new run.');
            run = new MultiStepActionRun({
                actionId: actionProgress.actionId,
                confirmToken,
                actionProgress,
                pollingOptions: queryOptions.polling,
            });
            libData.addMultiStepActionRun(run);
        }
        logger.debug('getMultiStepActionProgress: processing progress.', { previousProgress, actionProgress });
        // Has the notification been sent?
        if (!previousProgress?.notificationResult && actionProgress.notificationResult) {
            if (actionProgress.notificationResult === MultiStepActionSendNotificationResult.ok) {
                run.onEventReceived(MultiStepActionEventType.notificationSent);
            }
            else {
                run.onEventReceived(MultiStepActionEventType.notificationFailed);
            }
        }
        // Has the action lead to a result?
        if (!run.finished && actionHasFinished) {
            const success = actionProgress.result === MultiStepActionResult.ok;
            if ((actionProgress.actionType === MultiStepActionType.resetPassword ||
                actionProgress.actionType === MultiStepActionType.tokenSignIn) &&
                success &&
                actionProgress.authToken) {
                logger.debug('getMultiStepActionProgress: resetPassport or tokenSignIn succeeded.');
                // The user just signed in with a token.
                // Making the user info available to the rest of the client:
                const config = libData.config();
                clientInfo.myUserId = actionProgress.userId;
                clientInfo.authToken = actionProgress.authToken;
                libData.setConfig(config);
                // Save the data to LocalStorage:
                await libData.clientInfoStore().save({
                    myUserId: actionProgress.userId,
                    signedOutUserId: null,
                    authToken: actionProgress.authToken,
                });
                // Fetching a fresh copy of the user:
                await findMyUser({ cachePolicy: CachePolicy.network });
                for (const listener of libData.listeners()) {
                    if (listener.topic === BgListenerTopic.myUser &&
                        typeof listener.onSignedIn === 'function') {
                        const response = listener.onSignedIn();
                        if (response && typeof response.then === 'function') {
                            response.catch((error) => {
                                logger.error('getMultiStepActionProgress: listener onSignedIn failed.', { error });
                            });
                        }
                    }
                }
            }
            if (success) {
                run.onEventReceived(MultiStepActionEventType.success);
            }
            else if (actionProgress.result === MultiStepActionResult.passwordMismatch) {
                run.onEventReceived(MultiStepActionEventType.passwordMismatch);
            }
            else if (actionProgress.result === MultiStepActionResult.confirmTokenMismatch) {
                run.onEventReceived(MultiStepActionEventType.tokenFailed);
            }
            else if (failureResults.includes(actionProgress.result)) {
                run.onEventReceived(MultiStepActionEventType.failed);
            }
            else {
                run.onEventReceived(MultiStepActionEventType.other);
            }
            if (actionProgress.result !== MultiStepActionResult.confirmTokenMismatch &&
                actionProgress.result !== MultiStepActionResult.passwordMismatch) {
                logger.debug('getMultiStepActionProgress: result not (confirmToken|password)Mismatch, ending run.');
                if (run.timeoutRef) {
                    clearTimeout(run.timeoutRef);
                    run.timeoutRef = undefined;
                }
                run.finished = true;
                run.pollingFinishedAt = new Date();
                // This ends the polling.
                libData.removeMultiStepActionRun(actionProgress.actionId);
                result.object = {
                    id: actionProgress.actionId,
                    actionProgress,
                    run,
                    createdAt: actionProgress.createdAt,
                };
                return result;
            }
        }
        // Has the polling timed out?
        if (actionHasExpired ||
            (queryOptions.polling.enabled &&
                !run.pollingFinishedAt &&
                run.pollingStartedAt &&
                run.pollingOptions.timeout &&
                Date.now() - run.pollingStartedAt.getTime() > run.pollingOptions.timeout)) {
            logger.debug('getMultiStepActionProgress: polling timed out.', {
                actionId,
                actionHasExpired,
                pollingStartedAt: run.pollingStartedAt,
                timeout: run.pollingOptions.timeout,
                elapsed: Date.now() - (run.pollingStartedAt ? run.pollingStartedAt.getTime() : 0),
                queryOptions,
            });
            if (run.timeoutRef) {
                clearTimeout(run.timeoutRef);
                run.timeoutRef = undefined;
            }
            run.pollingFinishedAt = new Date();
            run.onEventReceived(MultiStepActionEventType.timedOut);
            libData.removeMultiStepActionRun(actionProgress.actionId);
            result.object = {
                id: actionProgress.actionId,
                actionProgress,
                run,
                createdAt: actionProgress.createdAt,
            };
            // No more polling
            return result;
        }
        // We're still polling, so we will call getMultiStepActionProgress again in a bit.
        if (!run.pollingStartedAt) {
            run.pollingStartedAt = new Date();
        }
        logger.debug('getMultiStepActionProgress: polling.');
        run.timeoutRef = setTimeout(() => {
            getMultiStepActionProgress(actionId, run.confirmToken, queryOptions);
        }, queryOptions.polling.interval || 2000);
        result.object = {
            id: actionProgress.actionId,
            actionProgress,
            run,
            createdAt: actionProgress.createdAt,
        };
        return result;
    }
    catch (error) {
        logger.error('getMultiStepActionProgress: failed.', { error });
        return { error: error.message };
    }
};
export default getMultiStepActionProgress;
//# sourceMappingURL=getMultiStepActionProgress.js.map