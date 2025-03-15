import { HttpHeaderName } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import data from '../../helpers/data.js';
import type { HttpHeaders } from '../../types/HttpHeaders.js';
import { AuthType } from '../gql/graphql.js';

const helpers = {
  headers: (): HttpHeaders => {
    const config = data.config();
    const clientInfo = clientInfoStore.get();
    const headers: HttpHeaders =
      clientInfo && config.fsdata && config.fsdata.headers
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
    } else {
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
