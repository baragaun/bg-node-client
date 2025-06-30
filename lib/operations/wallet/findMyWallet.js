import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Wallet } from '../../models/Wallet.js';
const findMyWallet = async (queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findMyWallet: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findMyWallet: unauthorized');
            return { error: 'unauthorized' };
        }
        const myUserId = libData.clientInfoStore().myUserId;
        if (!myUserId) {
            logger.error('operations.findMyWallet: myUserId not set');
            return { error: 'unauthorized' };
        }
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
        //   const localResult = await db.findById<Wallet>(
        //     myUserId,
        //     ModelType.Wallet,
        //   );
        //
        //   if (!localResult.error && localResult.object) {
        //     return localResult;
        //   }
        // }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            const wallet = new Wallet({ id: myUserId, createdBy: myUserId });
            const insertResult = await db.insert(wallet, ModelType.Wallet);
            if (insertResult.error || !insertResult.object) {
                logger.error('operations.findMyWallet: error inserting wallet', { error: insertResult.error });
                return insertResult;
            }
            return insertResult;
        }
        const result = await fsdata.wallet.findMyWallet();
        if (result.error) {
            logger.error('operations.findMyWallet: error from fsdata', { error: result.error });
            return { error: result.error };
        }
        if (result.object) {
            const wallet = { ...result.object };
            await db.upsert(wallet, ModelType.Wallet);
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findMyWallet;
//# sourceMappingURL=findMyWallet.js.map