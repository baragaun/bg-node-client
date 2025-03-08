import { Graffle } from 'graffle';
import { Opentelemetry } from 'graffle/extensions/opentelemetry';
import { Throws } from 'graffle/extensions/throws';
import { parse } from 'graphql';
import data from '../../../helpers/data.js';
import signUpUserGql from '../../gql/mutations/signUpUser.graphql.js';
import helpers from '../../helpers/helpers.js';
// see: https://graffle.js.org/guides/topics/requests
const signUpUser = async (input) => {
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
    input.checkAvailable = true;
    const document = parse(signUpUserGql);
    try {
        console.log('Sending signUpUser mutation with input:', input);
        const response = (await client
            // @ts-ignore
            .gql(document)
            .send({ input }));
        console.log('SignUpUser response:', response);
        return response.signUpUser;
    }
    catch (error) {
        console.error('SignUpUser mutation error:', error);
        throw error;
    }
};
export default signUpUser;
//# sourceMappingURL=signUpUser.js.map