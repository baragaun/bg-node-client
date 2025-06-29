import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ProductCategory } from '../../../models/ProductCategory.js';
import { ProductCategoryListFilter } from '../../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromGql,
  InputMaybe,
  ProductCategoryInput,
  ProductCategoryListFilter as ProductCategoryListFilterFromGql,
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
  filter: ProductCategoryListFilter | null | undefined,
  match: Partial<ProductCategory> | null | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<ProductCategory>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findProductCategories: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindProductCategoriesArgs = {
      filter: (filter || null) as unknown as ProductCategoryListFilterFromGql | null,
      match: match as unknown as InputMaybe<ProductCategoryInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromGql>,
    };

    const response: ResponseDataType = await client.query.findProductCategories({
      $: args,
      ...modelFields.productCategory,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findProductCategories: errors received',
        { errorCode: (response.errors['0'] as any).extensions.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

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
