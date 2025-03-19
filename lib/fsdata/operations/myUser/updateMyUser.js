import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import findMyUser from './findMyUser.js';
import db from '../../../db/db.js';
import { ModelType, MutationType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import gql from '../../gql/mutations/updateMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
// see: https://graffle.js.org/guides/topics/requests
const updateMyUser = async (changes, queryOptions = defaultQueryOptionsForMutations) => {
    const config = libData.config();
    const result = {
        operation: MutationType.update,
    };
    if (!config || !config.fsdata || !config.fsdata.url) {
        logger.error('GraphQL not configured.');
        result.error = 'unavailable';
        return result;
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptionsForMutations;
    }
    try {
        const client = Graffle.create().transport({
            url: libData.config().fsdata.url,
            headers: helpers.headers(),
        });
        // .use(Throws())
        // .use(Opentelemetry());
        const document = parse(gql);
        const needOldUpdatedAt = queryOptions.polling?.enabled &&
            queryOptions.polling?.isInTargetStateFunc === 'watch-updated-at';
        let oldUpdatedAt = changes.updatedAt;
        if (!oldUpdatedAt && needOldUpdatedAt) {
            logger.debug('fsdata.updateMyUser: changes.updatedAt is null; reading from DB.');
            const { object: cachedUser } = await db.findById(changes.id, ModelType.MyUser);
            if (cachedUser && cachedUser.updatedAt) {
                logger.debug('fsdata.updateMyUser: setting oldUpdatedAt to cachedUser.updatedAt.');
                oldUpdatedAt = cachedUser.updatedAt;
            }
        }
        const response = await client
            .gql(document)
            .send({ input: changes });
        if (!response.updateMyUser) {
            logger.error('fsdata.updateMyUser: mutation did not return a valid response.');
            result.error = 'system-error';
            return result;
        }
        if (!queryOptions.polling || (needOldUpdatedAt && !oldUpdatedAt)) {
            result.object = await findMyUser();
            return result;
        }
        if (queryOptions.polling) {
            queryOptions.polling.oldUpdatedAt = oldUpdatedAt;
        }
        else {
            queryOptions.polling = {
                enabled: true,
                isInTargetStateFunc: 'watch-updated-at',
                oldUpdatedAt,
            };
        }
        logger.debug('fsdata.updateMyUser: starting polling.');
        const fetchedMyUser = await pollForUpdatedObject(changes.id, ModelType.MyUser, queryOptions);
        logger.debug('fsdata.updateMyUser: polling finished.', { fetchedMyUser });
        result.object = fetchedMyUser;
        return result;
    }
    catch (error) {
        logger.error('fsdata.updateMyUser: failed with error', { error, headers: helpers.headers() });
        result.error = 'system-error';
        return result;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map