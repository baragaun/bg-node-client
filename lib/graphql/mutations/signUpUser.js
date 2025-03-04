import { Graffle } from 'graffle';
import { parse } from 'graphql';
// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input) => {
    const graffle = Graffle
        .create()
        .transport({
        url: `http://localhost:8092/fsdata/api/graphql`,
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
    const data = await graffle.gql(document).send(input);
    console.log(data);
    return data;
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map