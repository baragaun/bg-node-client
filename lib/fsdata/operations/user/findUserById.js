import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import findUserByIdGql from '../../gql/queries/findUserById.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findUserById = async () => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        console.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    const client = Graffle.create()
        .transport({
        url: data.config().fsdata.url,
        headers: helpers.headers(),
    })
        .use(Throws())
        .use(Opentelemetry());
    const document = parse(findUserByIdGql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send());
        console.log(response);
        return response.getMyUser;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default findUserById;
//# sourceMappingURL=findUserById.js.map