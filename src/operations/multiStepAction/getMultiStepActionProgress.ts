import {
  CachePolicy,
  MultiStepActionEventType,
  MultiStepActionResult,
  MultiStepActionSendNotificationResult,
  MultiStepActionType,
} from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import persistClientInfo from '../../helpers/persistClientInfo.js';
import { MultiStepActionRun } from '../../models/MultiStepActionRun.js';
import { SidMultiStepActionProgress } from '../../models/SidMultiStepActionProgress.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
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

const getMultiStepActionProgress = async (
  actionId: string,
  confirmToken: string | undefined,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  logger.debug('BgNodeClient.operations.multiStepAction.getMultiStepActionProgress called.',
    { actionId, confirmToken, queryOptions });

  const clientInfo = clientInfoStore.get();
  const result: QueryResult<MultiStepActionProgressResult> = {};

  try {
    const actionProgress =
      await fsdata.multiStepAction.getMultiStepActionProgress(
        actionId,
        confirmToken,
      );

    if (!actionProgress) {
      logger.error('BgNodeClient.operations.multiStepAction.getMultiStepActionProgress: received error.',
        { actionId, confirmToken });
      result.error = 'not-found';
      return result;
    }

    let run: MultiStepActionRun | null = libData.multiStepActionRun(actionProgress.actionId);
    const previousProgress: SidMultiStepActionProgress | undefined =
      run?.actionProgress;

    if (run) {
      run.actionProgress = actionProgress;
      if (confirmToken) {
        run.confirmToken = confirmToken;
      }

      if (run.isStopped()) {
        if (!run.pollingFinishedAt && !run.finished) { // Only proceed if the action hasn't already finished
          run.pollingFinishedAt = new Date();

          run.onEventReceived(MultiStepActionEventType.other);
          libData.removeMultiStepActionRun(actionProgress.actionId);

          result.object = {
            id: actionProgress.actionId,
            actionProgress,
            run,
            createdAt: actionProgress.createdAt,
            error: 'polling-stopped',
          };
        }

        return result;
      }
    } else {
      run = new MultiStepActionRun({
        actionId: actionProgress.actionId,
        confirmToken,
        actionProgress,
        pollingOptions: queryOptions.polling,
      });
      libData.addMultiStepActionRun(run);
    }

    logger.debug('BgNodeClient.operations.multiStepAction.getMultiStepActionProgress: run.',
      { actionProgress, run });

    // Has the notification been sent?
    if (!previousProgress?.notificationResult && actionProgress.notificationResult) {
      if (actionProgress.notificationResult === MultiStepActionSendNotificationResult.ok) {
        run.onEventReceived(MultiStepActionEventType.notificationSent);
      } else {
        run.onEventReceived(MultiStepActionEventType.notificationFailed);
      }
    }

    // Has the action lead to a result?
    if (
      !run.finished &&
      actionProgress.result &&
      actionProgress.result !== MultiStepActionResult.unset
    ) {
      const success = actionProgress.result === MultiStepActionResult.ok;

      if (
        (actionProgress.actionType === MultiStepActionType.resetPassword ||
          actionProgress.actionType === MultiStepActionType.tokenSignIn) &&
        success &&
        actionProgress.authToken
      ) {
        // The user just signed in with a token.
        // Making the user info available to the rest of the client:
        const config = libData.config();
        clientInfo.myUserId = actionProgress.userId;
        clientInfo.authToken = actionProgress.authToken;
        libData.setConfig(config);

        // Save the data to LocalStorage:
        await persistClientInfo({
          myUserId: actionProgress.userId,
          signedOutUserId: null,
          authToken: actionProgress.authToken,
        });

        // Fetching a fresh copy of the user:
        await findMyUser({ cachePolicy: CachePolicy.network });
      }

      if (success) {
        run.onEventReceived(MultiStepActionEventType.success);
      } else if (
        actionProgress.result === MultiStepActionResult.passwordMismatch
      ) {
        run.onEventReceived(MultiStepActionEventType.passwordMismatch);
      } else if (
        actionProgress.result === MultiStepActionResult.confirmTokenMismatch
      ) {
        run.onEventReceived(MultiStepActionEventType.tokenFailed);
      } else if (failureResults.includes(actionProgress.result)) {
        run.onEventReceived(MultiStepActionEventType.failed);
      } else {
        run.onEventReceived(MultiStepActionEventType.other);
      }

      if (
        actionProgress.result !== MultiStepActionResult.confirmTokenMismatch &&
        actionProgress.result !== MultiStepActionResult.passwordMismatch
      ) {
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
    if (
      queryOptions.polling.enabled &&
      !run.pollingFinishedAt &&
      run.pollingStartedAt &&
      Date.now() - run.pollingStartedAt.getTime() > run.pollingOptions.timeout
    ) {
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

    setTimeout(() => {
      getMultiStepActionProgress(actionId, run.confirmToken, queryOptions);
    }, queryOptions.polling.interval || 1000);

    result.object = {
      id: actionProgress.actionId,
      actionProgress,
      run,
      createdAt: actionProgress.createdAt,
    };

    return result;
  } catch (error) {
    logger.error('BgNodeClient.operations.multiStepAction.getMultiStepActionProgress: failed.',
      { error });
    return null;
  }
};

export default getMultiStepActionProgress;
