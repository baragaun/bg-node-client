import { Graffle } from 'graffle';
import { parse } from 'graphql';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input) => {
    const config = helpers.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        console.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create().transport({
        url: helpers.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(`
    mutation signUpUser ($input: SignUpUserInput!) {
      signUpUser (input: $input) {
        id
        authToken
      }
    }
  `);
    try {
        console.log('Sending signUpUser mutation with input:', input);
        // @ts-ignore
        const data = (await client.gql(document).send({ input }));
        console.log('SignUpUser response:', data);
        return data;
    }
    catch (error) {
        console.error('SignUpUser mutation error:', error);
        throw error;
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map