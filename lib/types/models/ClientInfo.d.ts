import { Model } from './Model.js';
export declare class ClientInfo extends Model {
    myUserId?: string;
    authToken?: string;
    myUserDeviceUuid?: string;
    signedOutUserId?: string;
    constructor(attributes?: Partial<ClientInfo> | null);
    static createDeviceUuid(): string;
}
