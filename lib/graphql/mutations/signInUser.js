import { parse } from 'graphql';
import { createGraffleClient } from '../utils/createGraffleClient.js';
// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input) => {
    const graffle = createGraffleClient();
    //   // .use(Throws())
    //   // .use(Opentelemetry())
    const document = parse(`
    mutation SignInUser ($input: SignInUserInput!) {
      signInUser (input: $input) {
        id
        authToken
      }
    }
  `);
    const data = await graffle.gql(document).send(input);
    // const endpoint = 'http://localhost:8092/fsdata/api/graphql';
    // const client = new GraphQLClient(endpoint);
    // const data = await client.request(document, { input });
    console.log(data);
    return data;
};
export default SignInUser;
//# sourceMappingURL=signInUser.js.map