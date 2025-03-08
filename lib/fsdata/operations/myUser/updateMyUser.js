import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import gql from '../../gql/mutations/updateMyUser.graphql.js';
import helpers from '../../helpers/helpers.js';
import { ModelType } from '../../../enums.js';
import db from '../../../db/db.js';
import pollForUpdatedObject from '../pollForUpdatedObject.js';
import { defaultQueryOptions } from '../../../helpers/defaults.js';
// see: https://graffle.js.org/guides/topics/requests
const updateMyUser = async (myUser, queryOptions = defaultQueryOptions) => {
    const config = data.config();
    if (!config || !config.fsdata || !config.fsdata.url) {
        console.error('GraphQL not configured.');
        throw new Error('unavailable');
    }
    if (!queryOptions) {
        queryOptions = defaultQueryOptions;
    }
    try {
        const client = Graffle.create()
            .transport({
            url: data.config().fsdata.url,
            headers: helpers.headers(),
        })
            .use(Throws())
            .use(Opentelemetry());
        const document = parse(gql);
        let oldUpdatedAt = myUser.updatedAt;
        if (!oldUpdatedAt) {
            const { object: cachedUser } = await db.findById(myUser.id, ModelType.MyUser);
            if (!cachedUser || !cachedUser.updatedAt) {
                console.error('updateMyUser: no cached user found, or updatedAt not set.');
                return null;
            }
            oldUpdatedAt = cachedUser.updatedAt;
        }
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send());
        if (!response.updateMyUser) {
            return null;
        }
        if (queryOptions.polling) {
            queryOptions.polling.oldUpdatedAt = oldUpdatedAt;
        }
        else {
            queryOptions.polling = {
                isInTargetStateFunc: 'watch-updated-at',
                oldUpdatedAt,
            };
        }
        const updatedUser = await pollForUpdatedObject(myUser.id, ModelType.MyUser, queryOptions);
        return updatedUser;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default updateMyUser;
//# sourceMappingURL=updateMyUser.js.map