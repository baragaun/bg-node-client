import { SidMultiStepAction } from '../../../models/SidMultiStepAction.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyActiveMultiStepActions: () => Promise<QueryResult<SidMultiStepAction>>;
export default findMyActiveMultiStepActions;
