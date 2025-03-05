import { Graffle } from 'graffle';
import { parse } from 'graphql';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async () => {
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
    const data = (await client.gql(document).send());
    console.log(data);
    return data;
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map