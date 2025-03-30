import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
// import { create } from '../../graffle/fsdata/_.js'
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import findMyUserGql from '../../gql/queries/findMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyUser = async () => {
    if (!libData.isInitialized()) {
        logger.error('findMyUser: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create()
        .transport({
        url: libData.config().fsdata.url,
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
            logger.error('fsdata.findMyUser: not found.');
            return { error: 'not-found' };
        }
        return { object: new MyUser(response.findMyUser) };
    }
    catch (error) {
        const headers = helpers.headers();
        logger.error('findMyUser failed.', { error, headers });
        return { error: error.message };
    }
};
export default findMyUser;
//# sourceMappingURL=findMyUser.js.map