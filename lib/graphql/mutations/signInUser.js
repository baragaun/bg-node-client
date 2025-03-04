import { Graffle } from 'graffle';
import { parse } from 'graphql';
// see: https://graffle.js.org/guides/topics/requests
const SignInUser = async (input) => {
    const graffle = Graffle
        .create()
        .transport({
        url: `http://localhost:8092/fsdata/api/graphql`,
    });
    //   // .use(Throws())
    //   // .use(Opentelemetry())
    const document = parse(`
    mutation SignInUser ($input: SignInUserInput!) {
      SignInUser (input: $input) {
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