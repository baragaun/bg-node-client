import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const startResetPassword = async (input) => {
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
    mutation StartResetPassword($input: UserIdentInput!) {
      startResetPassword(input: $input) {
        actionId
        attemptCount
        actionType
        actionStatus
        authToken
        createdAt
        expiresAt
        result
      }
    }
  `);
    try {
        console.log('Sending startResetPassword mutation with input:', input);
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ input }));
        console.log('startResetPassword response:', response);
        return response.startResetPassword;
    }
    catch (error) {
        console.error('startResetPassword mutation error:', error);
        throw error;
    }
};
export default startResetPassword;
//# sourceMappingURL=startResetPassword.js.map