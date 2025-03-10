import { HttpHeaderName } from '../../enums.js';
import data from '../../helpers/data.js';
import { AuthType } from '../gql/graphql.js';
const helpers = {
    headers: () => {
        const config = data.config();
        const headers = config && config.fsdata && config.fsdata.headers
            ? { ...config.fsdata.headers, [HttpHeaderName.contentType]: 'application/json' }
            : { [HttpHeaderName.contentType]: 'application/json' };
        if (config && config.myUserId) {
            headers[HttpHeaderName.userId] = config.myUserId;
        }
        if (config && config.myUserDeviceUuid) {
            headers[HttpHeaderName.deviceUuid] = config.myUserDeviceUuid;
        }
        if (config && config.authToken) {
            headers[HttpHeaderName.authorization] = `Bearer ${config.authToken}`;
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