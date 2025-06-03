import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ProductCategory } from '../../../models/ProductCategory.js';
import { ProductCategoryListFilter as ProduceCategoryListFilterFromClient } from '../../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ProductCategoryInput,
  ProductCategoryListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindProductCategoriesArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findProductCategories: ProductCategory[] | null;
  };
  errors?: { message: string }[];
};

const findProductCategories = async (
  filter: ProduceCategoryListFilterFromClient | null | undefined,
  match: Partial<ProductCategory> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<ProductCategory>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findProductCategories: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindProductCategoriesArgs = {
      filter: (filter || null) as unknown as ProductCategoryListFilter | null,
      match: match as unknown as InputMaybe<ProductCategoryInput>,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findProductCategories({
      $: args,
      ...modelFields.productCategory,
    });

    logger.debug('fsdata.findProductCategories response:', { response });

    return {
      objects: response.data.findProductCategories
        ? response.data.findProductCategories.map((categoryData) => new ProductCategory(categoryData))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findProductCategories: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findProductCategories;
