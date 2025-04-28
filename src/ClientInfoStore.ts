import db from './db/db.js';
import { ClientInfoStoreType, ModelType } from './enums.js';
import logger from './helpers/logger.js';
import { ClientInfo } from './models/ClientInfo.js';

export class ClientInfoStore {
  private _storeType: ClientInfoStoreType;
  private _clientInfo: ClientInfo;

  public constructor(storeType: ClientInfoStoreType, clientInfo?: ClientInfo) {
    this._storeType = storeType;
    this._clientInfo = clientInfo || new ClientInfo({
      id: 'default',
      createdAt: new Date().toISOString(),
    });
  }

  public close = (): void => {
    if (this._storeType !== ClientInfoStoreType.inMemory) {
      this._clientInfo = undefined;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters:
  public get clientInfo (): ClientInfo {
    if (!this._clientInfo || !this._clientInfo.myUserDeviceUuid) {
      this._clientInfo = new ClientInfo({
        id: 'default',
        myUserDeviceUuid: ClientInfo.createDeviceUuid(),
        createdAt: new Date().toISOString(),
      });
    }
    return this._clientInfo;
  }

  public get isSignedIn(): boolean {
    // return !!(
    //   this._clientInfo.myUserId &&
    //   this._clientInfo.myUserDeviceUuid &&
    //   this._clientInfo.authToken
    // );
    return this._clientInfo.isSignedIn;
  }

  public get myUserId(): string {
    return this._clientInfo.myUserId;
  }

  public get myUserDeviceUuid(): string {
    return this._clientInfo.myUserDeviceUuid;
  }

  public get isSessionActive(): boolean {
    // return this.isSignedIn &&
    //   !!this._clientInfo.sessionStartedAt &&
    //   !this._clientInfo.sessionEndedAt;
    return this._clientInfo.isSessionActive;
  }

  public static createDeviceUuid(): string {
    return crypto.randomUUID().replaceAll('-', '');
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Persistence:
  public async save(changes?: Partial<ClientInfo>): Promise<ClientInfo> {
    if (changes) {
      if (changes.myUserId) {
        this._clientInfo.myUserId = changes.myUserId;
      } else if (changes.myUserId === null) {
        delete this._clientInfo.myUserId;
      }

      if (changes.myUserDeviceUuid) {
        this._clientInfo.myUserDeviceUuid = changes.myUserDeviceUuid;
      }

      if (changes.authToken) {
        this._clientInfo.authToken = changes.authToken;
      } else if (changes.authToken === null) {
        delete this._clientInfo.authToken;
      }

      if (changes.signedOutUserId) {
        this._clientInfo.signedOutUserId = changes.signedOutUserId;
      } else if (changes.signedOutUserId === null) {
        delete this._clientInfo.signedOutUserId;
      }

      if (changes.localContentStatus) {
        this._clientInfo.localContentStatus = changes.localContentStatus;
      } else if (changes.localContentStatus === null) {
        delete this._clientInfo.localContentStatus;
      }

      if (changes.remoteContentStatus) {
        this._clientInfo.remoteContentStatus = changes.remoteContentStatus;
      } else if (changes.remoteContentStatus === null) {
        delete this._clientInfo.remoteContentStatus;
      }

      if (changes.sessionStartedAt) {
        this._clientInfo.sessionStartedAt = changes.sessionStartedAt;
      } else if (changes.sessionStartedAt === null) {
        delete this._clientInfo.sessionStartedAt;
      }

      if (changes.sessionEndedAt) {
        this._clientInfo.sessionEndedAt = changes.sessionEndedAt;
      } else if (changes.sessionEndedAt === null) {
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
    if (
      this._storeType === ClientInfoStoreType.localStorage &&
      (typeof window === 'undefined' || !window.localStorage)
    ) {
      try {
        const json = JSON.stringify(this._clientInfo);
        window.localStorage.setItem('clientInfo', json);
      } catch (error) {
        logger.error('ClientInfoStore.persist: Error saving client info:', { error });
      }

      return this._clientInfo;
    }

    // .............................................................................................
    // DB:
    try {
      const queryResult = await db.replace<ClientInfo>(
        this._clientInfo,
        ModelType.ClientInfo,
      );

      if (queryResult.error) {
        logger.error('Error saving client info:', queryResult.error);
      } else {
        this._clientInfo = new ClientInfo(queryResult.object);
      }
    } catch (error) {
      logger.error('ClientInfoStore.persist: Error saving client info:', { error });
    }

    return this.clientInfo;
  }

  public async load(): Promise<ClientInfo> {
    // .............................................................................................
    // In-Memory:
    if (this._storeType === ClientInfoStoreType.inMemory) {
      return this.clientInfo;
    }

    // .............................................................................................
    // LocalStorage:
    if (
      this._storeType === ClientInfoStoreType.localStorage &&
      (typeof window === 'undefined' || !window.localStorage)
    ) {
      try {
        const json = window.localStorage.getItem('client-info');
        this._clientInfo = new ClientInfo(JSON.parse(json));

        if (!this._clientInfo || !this._clientInfo.myUserDeviceUuid) {
          logger.error('loadClientInfo: invalid JSON in localStorage', { json });
          return this.clientInfo;
        }

        return this._clientInfo;
      } catch (error) {
        logger.error('ClientInfoStoreFailed.load: error', { error });
        return this.clientInfo;
      }
    }

    // .............................................................................................
    // DB:
    try {
      const queryResult = await db.findById<ClientInfo>(
        'default',
        ModelType.ClientInfo,
      );

      if (queryResult.error || !queryResult) {
        logger.error('loadClientInfo: invalid ClientInfo object in DB', { queryResult });
        return this.clientInfo;
      }

      if (!queryResult.object) { // No existing ClientInfo found, save the default
        logger.debug('loadClientInfo: no ClientInfo object found in DB', { queryResult });
        await this.save(this._clientInfo);
        return this.clientInfo;
      }

      this._clientInfo = new ClientInfo(queryResult.object);

      return this._clientInfo;
    } catch (error) {
      logger.error('ClientInfoStoreFailed.load: error', { error });
      return this.clientInfo;
    }
  };

  public async clear(): Promise<ClientInfo> {
    this._clientInfo = new ClientInfo();

    return this.save(this._clientInfo);
  }

  public async clearMyUserFromClientInfo(signedOutUserId?: string): Promise<ClientInfo> {
    this._clientInfo.myUserId = null;
    this._clientInfo.authToken = null;
    this._clientInfo.signedOutUserId = signedOutUserId || this._clientInfo.signedOutUserId;
    this._clientInfo.localContentStatus = null;
    this._clientInfo.remoteContentStatus = null;
    this._clientInfo.sessionStartedAt = null;
    this._clientInfo.sessionEndedAt = null;

    return this.save(this._clientInfo);
  }

  public updateMyUserUpdatedAt = (myUserUpdatedAt: number): void => {
    if (!this._clientInfo.localContentStatus) {
      this._clientInfo.localContentStatus = {
        id: '0',
        myUserUpdatedAt,
        createdAt: new Date().toISOString(),
      };
    } else {
      this._clientInfo.localContentStatus.myUserUpdatedAt = myUserUpdatedAt;
    }
    if (!this._clientInfo.remoteContentStatus) {
      this._clientInfo.remoteContentStatus = {
        id: '0',
        myUserUpdatedAt,
        createdAt: new Date().toISOString(),
      };
    } else {
      this._clientInfo.remoteContentStatus.myUserUpdatedAt = myUserUpdatedAt;
    }
    this.save(this._clientInfo).catch((error) => {
      logger.error('clientInfoStore.updateMyUserUpdatedAt: Error updating myUserUpdatedAt:', error);
    });
  };

  public sessionEnded = (): void => {
    delete this._clientInfo.sessionStartedAt;
    this._clientInfo.sessionEndedAt = Date.now();
    this.save(this._clientInfo).catch((error) => {
      logger.error('clientInfoStore.sessionEnded: Error updating myUserUpdatedAt:', error);
    });
  };

  public sessionStarted = (): void => {
    this._clientInfo.sessionStartedAt = Date.now();
    delete this._clientInfo.sessionEndedAt;
    this.save(this._clientInfo).catch((error) => {
      logger.error('clientInfoStore.sessionStarted: Error updating myUserUpdatedAt:', error);
    });
  };
}
