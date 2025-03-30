import db from './db/db.js';
import { ClientInfoStoreType, ModelType } from './enums.js';
import logger from './helpers/logger.js';
import { ClientInfo } from './models/ClientInfo.js';
export class ClientInfoStore {
    _storeType;
    _clientInfo;
    constructor(storeType, clientInfo) {
        this._storeType = storeType;
        this._clientInfo = clientInfo || new ClientInfo({
            id: 'default',
            createdAt: new Date().toISOString(),
        });
    }
    close = () => {
        if (this._storeType !== ClientInfoStoreType.inMemory) {
            this._clientInfo = undefined;
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Getters:
    get clientInfo() {
        if (!this._clientInfo || !this._clientInfo.myUserDeviceUuid) {
            this._clientInfo = new ClientInfo({
                id: 'default',
                myUserDeviceUuid: ClientInfo.createDeviceUuid(),
                createdAt: new Date().toISOString(),
            });
        }
        return this._clientInfo;
    }
    get isSignedIn() {
        // return !!(
        //   this._clientInfo.myUserId &&
        //   this._clientInfo.myUserDeviceUuid &&
        //   this._clientInfo.authToken
        // );
        return this._clientInfo.isSignedIn;
    }
    get myUserId() {
        return this._clientInfo.myUserId;
    }
    get myUserDeviceUuid() {
        return this._clientInfo.myUserDeviceUuid;
    }
    get isSessionActive() {
        // return this.isSignedIn &&
        //   !!this._clientInfo.sessionStartedAt &&
        //   !this._clientInfo.sessionEndedAt;
        return this._clientInfo.isSessionActive;
    }
    static createDeviceUuid() {
        return crypto.randomUUID().replaceAll('-', '');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Persistence:
    async save(changes) {
        if (changes) {
            if (changes.myUserId) {
                this._clientInfo.myUserId = changes.myUserId;
            }
            else if (changes.myUserId === null) {
                delete this._clientInfo.myUserId;
            }
            if (changes.myUserDeviceUuid) {
                this._clientInfo.myUserDeviceUuid = changes.myUserDeviceUuid;
            }
            if (changes.authToken) {
                this._clientInfo.authToken = changes.authToken;
            }
            else if (changes.authToken === null) {
                delete this._clientInfo.authToken;
            }
            if (changes.signedOutUserId) {
                this._clientInfo.signedOutUserId = changes.signedOutUserId;
            }
            else if (changes.signedOutUserId === null) {
                delete this._clientInfo.signedOutUserId;
            }
            if (changes.localContentStatus) {
                this._clientInfo.localContentStatus = changes.localContentStatus;
            }
            else if (changes.localContentStatus === null) {
                delete this._clientInfo.localContentStatus;
            }
            if (changes.remoteContentStatus) {
                this._clientInfo.remoteContentStatus = changes.remoteContentStatus;
            }
            else if (changes.remoteContentStatus === null) {
                delete this._clientInfo.remoteContentStatus;
            }
            if (changes.sessionStartedAt) {
                this._clientInfo.sessionStartedAt = changes.sessionStartedAt;
            }
            else if (changes.sessionStartedAt === null) {
                delete this._clientInfo.sessionStartedAt;
            }
            if (changes.sessionEndedAt) {
                this._clientInfo.sessionEndedAt = changes.sessionEndedAt;
            }
            else if (changes.sessionEndedAt === null) {
                delete this._clientInfo.sessionEndedAt;
            }
        }
        // .............................................................................................
        // In-Memory:
        if (this._storeType === ClientInfoStoreType.inMemory) {
            return this._clientInfo;
        }
        // .............................................................................................
        // LocalStorage:
        if (this._storeType === ClientInfoStoreType.localStorage &&
            (typeof window === 'undefined' || !window.localStorage)) {
            try {
                const json = JSON.stringify(this._clientInfo);
                window.localStorage.setItem('clientInfo', json);
            }
            catch (error) {
                logger.error('ClientInfoStore.persist: Error saving client info:', { error });
            }
            return this._clientInfo;
        }
        // .............................................................................................
        // DB:
        try {
            const queryResult = await db.replace(this._clientInfo, ModelType.ClientInfo);
            if (queryResult.error) {
                logger.error('Error saving client info:', queryResult.error);
            }
            else {
                this._clientInfo = new ClientInfo(queryResult.object);
            }
        }
        catch (error) {
            logger.error('ClientInfoStore.persist: Error saving client info:', { error });
        }
        return this.clientInfo;
    }
    async load() {
        // .............................................................................................
        // In-Memory:
        if (this._storeType === ClientInfoStoreType.inMemory) {
            return this.clientInfo;
        }
        // .............................................................................................
        // LocalStorage:
        if (this._storeType === ClientInfoStoreType.localStorage &&
            (typeof window === 'undefined' || !window.localStorage)) {
            try {
                const json = window.localStorage.getItem('client-info');
                this._clientInfo = new ClientInfo(JSON.parse(json));
                if (!this._clientInfo || !this._clientInfo.myUserDeviceUuid) {
                    logger.error('loadClientInfo: invalid JSON in localStorage', { json });
                    return this.clientInfo;
                }
                return this._clientInfo;
            }
            catch (error) {
                logger.error('ClientInfoStoreFailed.load: error', { error });
                return this.clientInfo;
            }
        }
        // .............................................................................................
        // DB:
        try {
            const queryResult = await db.findById('default', ModelType.ClientInfo);
            if (queryResult.error ||
                !queryResult ||
                !queryResult.object) {
                logger.error('loadClientInfo: invalid ClientInfo object in DB', { queryResult });
                return this.clientInfo;
            }
            this._clientInfo = new ClientInfo(queryResult.object);
            return this._clientInfo;
        }
        catch (error) {
            logger.error('ClientInfoStoreFailed.load: error', { error });
            return this.clientInfo;
        }
    }
    ;
    async clear() {
        this._clientInfo = new ClientInfo();
        return this.save(this._clientInfo);
    }
    async clearMyUserFromClientInfo(signedOutUserId) {
        this._clientInfo.myUserId = null;
        this._clientInfo.authToken = null;
        this._clientInfo.signedOutUserId = signedOutUserId || this._clientInfo.signedOutUserId;
        this._clientInfo.localContentStatus = null;
        this._clientInfo.remoteContentStatus = null;
        this._clientInfo.sessionStartedAt = null;
        this._clientInfo.sessionEndedAt = null;
        return this.save(this._clientInfo);
    }
    updateMyUserUpdatedAt = (myUserUpdatedAt) => {
        if (!this._clientInfo.localContentStatus) {
            this._clientInfo.localContentStatus = {
                id: '0',
                myUserUpdatedAt,
                createdAt: new Date().toISOString(),
            };
        }
        else {
            this._clientInfo.localContentStatus.myUserUpdatedAt = myUserUpdatedAt;
        }
        if (!this._clientInfo.remoteContentStatus) {
            this._clientInfo.remoteContentStatus = {
                id: '0',
                myUserUpdatedAt,
                createdAt: new Date().toISOString(),
            };
        }
        else {
            this._clientInfo.remoteContentStatus.myUserUpdatedAt = myUserUpdatedAt;
        }
        this.save(this._clientInfo).catch((error) => {
            logger.error('clientInfoStore.updateMyUserUpdatedAt: Error updating myUserUpdatedAt:', error);
        });
    };
    sessionEnded = () => {
        delete this._clientInfo.sessionStartedAt;
        this._clientInfo.sessionEndedAt = Date.now();
        this.save(this._clientInfo).catch((error) => {
            logger.error('clientInfoStore.sessionEnded: Error updating myUserUpdatedAt:', error);
        });
    };
    sessionStarted = () => {
        this._clientInfo.sessionStartedAt = Date.now();
        delete this._clientInfo.sessionEndedAt;
        this.save(this._clientInfo).catch((error) => {
            logger.error('clientInfoStore.sessionStarted: Error updating myUserUpdatedAt:', error);
        });
    };
}
//# sourceMappingURL=ClientInfoStore.js.map