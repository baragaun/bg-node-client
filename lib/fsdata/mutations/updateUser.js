import { Graffle } from 'graffle';
import { parse } from 'graphql';
import data from '../../helpers/data.js';
import helpers from '../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const updateUser = async (input) => {
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
    mutation UpdateUser($input: UserInput!) {
        updateUser(input: $input)
    }
    `);
    try {
        const response = await client.gql(document).send({ input });
        console.log('UpdateUser response:', response);
    }
    catch (error) {
        console.error('UpdateUser mutation error:', error);
        throw error;
    }
};
export default updateUser;
//# sourceMappingURL=updateUser.js.map