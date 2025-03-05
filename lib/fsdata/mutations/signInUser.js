import { Graffle } from 'graffle';
import { parse } from 'graphql';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input) => {
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
    mutation SignInUser ($input: SignInUserInput!) {
      signInUser (input: $input) {
        id
        authToken
      }
    }
  `);
    const data = (await client.gql(document).send(input));
    console.log(data);
    return data;
};
export default SignInUser;
//# sourceMappingURL=signInUser.js.map