import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ProductCategory } from '../../../models/ProductCategory.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';
const findProductCategories = async (filter, match, options) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('fsdata.findProductCategories: unavailable');
            return { error: 'unavailable' };
        }
        const client = graffleClientStore.get();
        const args = {
            filter: (filter || null),
            match: match,
            options: options,
        };
        const response = await client.query.findProductCategories({
            $: args,
            ...modelFields.productCategory,
        });
        logger.debug('fsdata.findProductCategories response:', { response });
        return {
            objects: response.data.findProductCategories
                ? response.data.findProductCategories.map((categoryData) => new ProductCategory(categoryData))
                : null,
        };
    }
    catch (error) {
        logger.error('fsdata.findProductCategories: error', { error, headers: helpers.headers() });
        return { error: error.message };
    }
};
export default findProductCategories;
//# sourceMappingURL=findProductCategories.js.map