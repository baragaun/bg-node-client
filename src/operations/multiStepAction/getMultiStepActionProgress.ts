import helpers from './helpers.js';
import { CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { MultiStepActionResult, MultiStepActionType } from '../../fsdata/gql/graphql.js';
import data from '../../helpers/data.js';
import saveUserInfo from '../../helpers/saveUserInfo.js';
import { MultiStepActionRun } from '../../types/models/MultiStepActionRun.js';
import { MultiStepActionProgressResult } from '../../types/MultiStepActionProgressResult.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import findMyUser from '../myUser/findMyUser.js';

const getMultiStepActionProgress = async (
  actionId: string,
  confirmToken: string | undefined,
  queryOptions: QueryOptions,
): Promise<QueryResult<MultiStepActionProgressResult>> => {
  const config = data.config();
  const result: QueryResult<MultiStepActionProgressResult> = {};

  if (!config) {
    console.error('getMultiStepActionProgress: no config.');
    result.error = 'unavailable';
    return result;
  }

  try {
    const actionProgress = await fsdata.multiStepAction.getMultiStepActionProgress(
      actionId,
      confirmToken,
    );

    if (!actionProgress) {
      console.error('getMultiStepActionProgress: action not found.');
      result.error = 'not-found';
      return result;
    }

    let run: MultiStepActionRun = helpers.run(actionProgress.actionId);

    if (run) {
      // anything?
    } else {
      run = new MultiStepActionRun({
        actionId: actionProgress.actionId,
        actionProgress,
        pollingOptions: queryOptions.polling,
      });
      helpers.addRun(run);
    }

    const notificationSentOrFailed = run ? run.notificationSentOrFailed : undefined;
    const finished = run ? run.finished : undefined;

    if (!notificationSentOrFailed && actionProgress.notificationResult) {
      run.setNotificationSentOrFailed();
    }

    if (
      !finished &&
      actionProgress.result &&
      actionProgress.result !== MultiStepActionResult.Unset
    ) {
      run.finish();

      if (
        (actionProgress.actionType === MultiStepActionType.ResetPassword ||
          actionProgress.actionType === MultiStepActionType.TokenSignIn) &&
        actionProgress.result === MultiStepActionResult.Ok &&
        actionProgress.authToken
      ) {
        // The user just signed in with a token.
        // Making the user info available to the rest of the client:
        const config = data.config();
        config.myUserId = actionProgress.userId;
        config.authToken = actionProgress.authToken;
        data.setConfig(config);

        // Save the data to LocalStorage:
        saveUserInfo({
          myUserId: actionProgress.userId,
          myUserIdSignedOut: null,
          authToken: actionProgress.authToken,
        });

        // Fetching a fresh copy of the user:
        await findMyUser({ cachePolicy: CachePolicy.network });
      }

      run.finish();
      helpers.removeRun(actionProgress.actionId);

      result.object = {
        id: actionProgress.actionId,
        actionProgress,
        run,
        createdAt: actionProgress.createdAt,
      };
      return result;
    }

    if (queryOptions.polling.enabled && !run.pollingFinishedAt) {
      if (run.pollingFinishedAt) {
        if (Date.now() - run.pollingStartedAt.getTime() > run.pollingOptions.timeout) {
          run.pollingFinishedAt = new Date();
          run.finish();
          helpers.removeRun(actionProgress.actionId);
          result.object = {
            id: actionProgress.actionId,
            actionProgress,
            run,
            createdAt: actionProgress.createdAt,
          };
          return result;
        }
      } else {
        run.pollingFinishedAt = new Date();
      }
    }

    if (queryOptions.polling.enabled && !run.finished) {
      if (!run.pollingStartedAt) {
        run.pollingStartedAt = new Date();
      }

      setTimeout(() => {
        getMultiStepActionProgress(actionId, confirmToken, queryOptions);
      }, queryOptions.polling.interval || 1000);
    }

    return {
      object: {
        id: actionProgress.actionId,
        actionProgress,
        run,
        createdAt: actionProgress.createdAt,
      },
    };
  } catch (error) {
    console.error('findMultiStepAction: fsdata.myUser.getMultiStepActionProgress failed', error);
    return null;
  }
};

export default getMultiStepActionProgress;
