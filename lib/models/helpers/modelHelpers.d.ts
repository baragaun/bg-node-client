import { Model } from '../../types/Model.js';
import { ModelType } from '../../types/enums.js';
declare const modelHelpers: {
    formatObjectForDb: <T extends Model>(obj: Partial<T>, modelType: ModelType) => Partial<T>;
};
export default modelHelpers;
