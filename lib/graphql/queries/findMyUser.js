import { Graffle } from 'graffle';
import { parse } from 'graphql';
// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async () => {
    const graffle = Graffle
        .create()
        .transport({
        url: `http://localhost:8092/fsdata/api/graphql`,
    });
    //   // .use(Throws())
    //   // .use(Opentelemetry())
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