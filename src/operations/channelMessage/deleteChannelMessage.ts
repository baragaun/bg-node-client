import { ModelType } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
import deleteFnc from '../delete.js';

const deleteChannelMessage = async (id: string): Promise<QueryResult<void>> => {
  return deleteFnc(id, ModelType.ChannelMessage);
};

export default deleteChannelMessage;
