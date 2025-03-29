import { HttpHeaderName } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { AuthType } from '../gql/graphql.js';
const helpers = {
    headers: () => {
        const config = libData.config();
        const clientInfo = libData.clientInfoStore().clientInfo;
        const headers = clientInfo && config.fsdata && config.fsdata.headers
            ? {
                ...config.fsdata.headers,
                [HttpHeaderName.contentType]: 'application/json',
            }
            : { [HttpHeaderName.contentType]: 'application/json' };
        if (clientInfo && clientInfo.myUserId) {
            headers[HttpHeaderName.userId] = clientInfo.myUserId;
        }
        if (clientInfo && clientInfo.myUserDeviceUuid) {
            headers[HttpHeaderName.deviceUuid] = clientInfo.myUserDeviceUuid;
        }
        if (clientInfo && clientInfo.authToken) {
            headers[HttpHeaderName.authorization] = `Bearer ${clientInfo.authToken}`;
            headers[HttpHeaderName.authType] = AuthType.Token;
        }
        else {
            headers[HttpHeaderName.authorization] = `Bearer none`;
        }
        // todo: Add the other headers:
        //   acceptLanguage = 'accept-language',
        //   adminUserId = 'x-admin-user-id',
        //   consumer = 'x-consumer',
        //   consumerOs = 'x-consumer-os',
        //   consumerVersion = 'x-consumer-version',
        //   forwardedFor = 'x-forwarded-for',
        //   locale = 'x-locale',
        //   pushNotificationToken = 'x-pn-token',
        //   timezone = 'x-timezone',
        return headers;
    },
};
export default helpers;
//# sourceMappingURL=helpers.js.map