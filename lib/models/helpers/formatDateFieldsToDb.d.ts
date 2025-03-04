import { Model } from '../../types/Model.js';
declare const formatDateFieldsToDb: <T extends Model>(obj: Partial<T>, dateFields: string[]) => Partial<T>;
export default formatDateFieldsToDb;
