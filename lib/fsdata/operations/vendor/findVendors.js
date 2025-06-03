import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Vendor } from '../../../models/Vendor.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findVendors = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findVendors: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findVendors({
            $: args,
            ...modelFields.vendor,
        });
        logger.debug('fsdata.findVendors response:', { response });
        return {
            objects: response.data.findVendors
                ? response.data.findVendors.map((vendor) => new Vendor(vendor))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findVendors: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findVendors;
//# sourceMappingURL=findVendors.js.map