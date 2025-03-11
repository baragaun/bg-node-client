import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import data from '../../../helpers/data.js';
import { MyUser } from '../../../types/models/MyUser.js';
import findMyUserGql from '../../gql/queries/findMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async () => {
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
    const document = parse(findMyUserGql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send());
        if (!response.findMyUser) {
            return null;
        }
        return new MyUser(response.findMyUser);
    }
    catch (error) {
        const headers = helpers.headers();
        console.error('findMyUser failed.', { error, headers });
        return null;
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map