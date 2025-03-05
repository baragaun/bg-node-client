import { Graffle } from 'graffle';
import { parse } from 'graphql';
import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input) => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        console.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create().transport({
        url: data.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry())
    const document = parse(`
    mutation SignInUser ($input: SignInUserInput!) {
      signInUser (input: $input) {
        userId
        email
        firstName
        lastName
        userHandle
        authToken
      }
    }
  `);
    // @ts-ignore
    const userAuthResponse = (await client.gql(document).send({ input }));
    console.log(userAuthResponse);
    return userAuthResponse;
};
export default SignInUser;
//# sourceMappingURL=signInUser.js.map