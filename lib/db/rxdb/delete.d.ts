import { ModelType } from '../../types/enums.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const deleteFunc: (id: string, modelType: ModelType) => Promise<MutationResult>;
export default deleteFunc;
