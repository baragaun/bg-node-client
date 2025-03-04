import { parse } from 'graphql';
import { createGraffleClient } from '../utils/createGraffleClient.js';
// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input) => {
    const graffle = createGraffleClient();
    //   // .use(Throws())
    //   // .use(Opentelemetry())
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
        const data = await graffle.gql(document).send({ input });
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