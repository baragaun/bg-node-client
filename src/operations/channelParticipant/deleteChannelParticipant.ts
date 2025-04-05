import { ModelType } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelParticipant = async (id: string): Promise<QueryResult<void>> => {
  return deleteFnc(id, ModelType.ChannelParticipant);
};

export default deleteChannelParticipant;
