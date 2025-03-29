import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import { ModelType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import modelFactory from '../../models/modelFactory.js';
import findChannelById from '../gql/queries/findChannelById.graphql.js';
import findChannelInvitationById from '../gql/queries/findChannelInvitationById.graphql.js';
import findChannelMessageById from '../gql/queries/findChannelMessageById.graphql.js';
import findChannelParticipantById from '../gql/queries/findChannelParticipantById.graphql.js';
import findMyUser from '../gql/queries/findMyUser.graphql.js';
import findUserById from '../gql/queries/findUserById.graphql.js';
import helpers from '../helpers/helpers.js';
const _fieldDef = {
    [ModelType.Channel]: { field: 'findChannelById', gql: findChannelById },
    [ModelType.ChannelInvitation]: {
        field: 'findChannelInvitationById',
        gql: findChannelInvitationById,
    },
    [ModelType.ChannelMessage]: {
        field: 'findChannelMessageById',
        gql: findChannelMessageById,
    },
    [ModelType.ChannelParticipant]: {
        field: 'findChannelParticipantById',
        gql: findChannelParticipantById,
    },
    [ModelType.MyUser]: { field: 'findMyUser', gql: findMyUser, skipVars: true },
    [ModelType.User]: { field: 'findUserById', gql: findUserById },
};
// see: https://graffle.js.org/guides/topics/requests
const findById = async (id, modelType) => {
    if (!libData.isInitialized()) {
        logger.error('findById: unavailable');
        return { error: 'unavailable' };
    }
    const client = Graffle.create().transport({
        url: libData.config().fsdata.url,
        headers: helpers.headers(),
    });
    // .use(Throws())
    // .use(Opentelemetry());
    const fieldDef = _fieldDef[modelType];
    const document = parse(fieldDef.gql);
    const variables = modelType === ModelType.MyUser ? {} : { id };
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            // @ts-ignore
            .send(variables));
        logger.debug('fsdata.findById: response received', { response });
        if (!response[fieldDef.field]) {
            logger.error('fsdata.findById: no object received.');
            return { error: 'system-error' };
        }
        return { object: modelFactory(response[fieldDef.field], modelType) };
    }
    catch (error) {
        logger.error('findById: error', { error, headers: helpers.headers() });
        return null;
    }
};
export default findById;
//# sourceMappingURL=findById.js.map