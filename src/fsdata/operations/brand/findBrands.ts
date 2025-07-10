import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Brand } from '../../../models/Brand.js';
import { BrandListFilter as BrandListFilterFromClient } from '../../../models/BrandListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  BrandInput,
  BrandListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindBrandsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findBrands: Brand[] | null;
  };
  errors?: { message: string }[];
};

const findBrands = async (
  filter: BrandListFilterFromClient | null | undefined,
  match: Partial<Brand> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<Brand>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findBrands: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindBrandsArgs = {
      filter: (filter || null) as unknown as BrandListFilter | null,
      match: match as unknown as InputMaybe<BrandInput>,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findBrands({
      $: args,
      ...modelFields.brand,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findBrands: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.findBrands response:', { response: JSON.stringify(response) });

    return {
      objects: response.data.findBrands
        ? response.data.findBrands.map((brand) => new Brand(brand))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findBrands: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findBrands;
