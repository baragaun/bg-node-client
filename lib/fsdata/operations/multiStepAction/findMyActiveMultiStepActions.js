import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import gql from '../../gql/queries/findMyActiveMultiStepActions.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const findMyActiveMultiStepActions = async () => {
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
    const document = parse(gql);
    try {
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send());
        console.log(response);
        return response.findMyActiveMultiStepActions;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
export default findMyActiveMultiStepActions;
//# sourceMappingURL=findMyActiveMultiStepActions.js.map