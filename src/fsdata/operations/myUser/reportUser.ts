import { Graffle } from 'graffle';
// import { Opentelemetry } from 'graffle/extensions/opentelemetry';
// import { Throws } from 'graffle/extensions/throws';
import { parse, type TypedQueryDocumentNode } from 'graphql';

import findMyUser from './findMyUser.js';
import { MutationType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { MutationResult } from '../../../types/MutationResult.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { MutationReportUserArgs, ReportUserInput, ReportUserReasonTextId } from '../../gql/graphql.js';
import gql from '../../gql/mutations/reportUser.graphql.js';
import helpers from '../../helpers/helpers.js';

type ReportUserResponse = { reportUser: string };

const reportUser = async (
  userId: string,
  reasonTextId: ReportUserReasonTextId,
  messageText: string | undefined,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<MutationResult<void>> => {
  const config = libData.config();
  const result: MutationResult<void> = {
    operation: MutationType.update,
  };

  if (!config || !config.fsdata || !config.fsdata.url) {
    logger.error('GraphQL not configured.');
    result.error = 'unavailable';
    return result;
  }

  if (!queryOptions) {
    queryOptions = defaultQueryOptionsForMutations;
  }

  try {
    const myUser = await findMyUser();

    const client = Graffle.create().transport({
      url: libData.config().fsdata.url,
      headers: helpers.headers(),
    });

    const document = parse(gql) as TypedQueryDocumentNode<
      ReportUserResponse,
      MutationReportUserArgs
    >;

    const input: ReportUserInput = {
      userId,
      reasonTextId,
      messageText,
      createdBy: myUser.id,
    };
    const args: MutationReportUserArgs = { input }

    const response = await client
      .gql(document)
      .send(args);

    if (!response.reportUser) {
      logger.error('fsdata.reportUser: mutation did not return a valid response.');
      result.error = 'system-error';
      return result;
    }

    return result;
  } catch (error) {
    logger.error('fsdata.reportUser: failed with error', { error, headers: helpers.headers() });
    result.error = 'system-error';
    return result;
  }
};

export default reportUser;
