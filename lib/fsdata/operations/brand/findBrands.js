import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Brand } from '../../../models/Brand.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findBrands = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findBrands: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findBrands({
            $: args,
            ...modelFields.brand,
        });
        if (Array.isArray(response.errors) && response.errors.length > 0) {
            logger.error('fsdata.findBrands: errors received', { errorCode: response.errors['0'].extensions.code, errors: JSON.stringify(response.errors) });
            return { error: response.errors.map(error => error.message).join(', ') };
        }
        logger.debug('fsdata.findBrands response:', { response });
        return {
            objects: response.data.findBrands
                ? response.data.findBrands.map((brand) => new Brand(brand))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findBrands: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findBrands;
//# sourceMappingURL=findBrands.js.map