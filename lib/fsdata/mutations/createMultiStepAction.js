import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const createMultiStepAction = async (input) => {
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
    const document = parse(`
    mutation CreateMultiStepAction($input: SidMultiStepActionInput!) {
      createMultiStepAction(input: $input) {
      actionId
      actionStatus
      actionType
      attemptCount
      authToken
      authTokenExpiresAt
      expiresAt
      textData
      result
        }
  }
  `);
    try {
        console.log('Sending createMultiStepAction mutation with input:', input);
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ input }));
        console.log('createMultiStepAction response:', response);
        return response.createMultiStepAction;
    }
    catch (error) {
        console.error('createMultiStepAction mutation error:', error);
        throw error;
    }
};
export default createMultiStepAction;
//# sourceMappingURL=createMultiStepAction.js.map