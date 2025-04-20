import { ModelType } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelInvitation = async (id: string): Promise<QueryResult<void>> => {
  return deleteFnc(id, ModelType.ChannelInvitation);
};

export default deleteChannelInvitation;
