import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import data from '../../../helpers/data.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import { MultiStepActionResult, MultiStepActionSendNotificationResult } from '../../gql/graphql.js';
import gql from '../../gql/queries/getMultiStepActionProgress.graphql.js';
import helpers from '../../helpers/helpers.js';

const observingActions = new Map<string, SidMultiStepActionProgress>();

// see: https://graffle.js.org/guides/topics/requests
const getMultiStepActionProgress = async (
  actionId: string,
  confirmToken: string | undefined,
): Promise<SidMultiStepActionProgress | null> => {
  const config = data.config();

  if (!config || !config.fsdata || !config.fsdata.url) {
    console.error('GraphQL not configured.');
    throw new Error('unavailable');
  }

  const client = Graffle.create()
    .transport({
      url: data.config().fsdata.url,
      headers: helpers.headers(),
    })
    .use(Throws())
    .use(Opentelemetry());

  const document = parse(gql) as TypedQueryDocumentNode<{
    getMultiStepActionProgress: SidMultiStepActionProgress | null;
  }>;

  try {
    const response = (await client
      // @ts-ignore
      .gql(document)
      .send({ actionId, confirmToken })) as {
      getMultiStepActionProgress: SidMultiStepActionProgress | null;
    };

    const newAction = response.getMultiStepActionProgress;
    const previousAction = observingActions.get(actionId);

    if (
      newAction.notificationResult &&
      (!previousAction || newAction.notificationResult !== previousAction.notificationResult)
    ) {
      const listeners = data.listeners();
      if (Array.isArray(listeners) && listeners.length > 0) {
        for (const listener of listeners) {
          listener.onMultiStepActionNotificationSent(newAction);
        }
      }
    }

    if (
      newAction.result &&
      newAction.result !== MultiStepActionResult.Unset &&
      (!previousAction ||
        !previousAction.result ||
        previousAction.result === MultiStepActionResult.Unset)
    ) {
      if (newAction.result) {
        const listeners = data.listeners();
        if (Array.isArray(listeners) && listeners.length > 0) {
          for (const listener of listeners) {
            listener.onMultiStepActionFinished(newAction);
          }
        }
      }
    }

    if (newAction.result && newAction.result !== MultiStepActionResult.Unset) {
      // todo: stop polling
      observingActions.delete(actionId);
    } else {
      observingActions.set(actionId, newAction);
    }

    return newAction;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getMultiStepActionProgress;
