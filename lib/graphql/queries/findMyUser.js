import { parse } from 'graphql';
import { createGraffleClient } from '../utils/createGraffleClient.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async () => {
    const graffle = createGraffleClient();
    const document = parse(`
    query getMyUser {
      getMyUser {
        id
        userHandle
        firstName
        lastName
        email
        updatedAt
      }
    }
  `);
    const data = await graffle.gql(document).send();
    // const endpoint = 'http://localhost:8092/fsdata/api/graphql';
    // const client = new GraphQLClient(endpoint);
    // const data = await client.request(document, { input });
    console.log(data);
    return data;
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map