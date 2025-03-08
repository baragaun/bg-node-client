import { Model } from '../../types/Model.js';

const formatDateFieldsToDb = <T extends Model>(
  obj: Partial<T>,
  dateFields: string[],
): Partial<T> => {
  for (const field of dateFields) {
    if (obj[field]) {
      obj[field] = obj[field].toISOString();
    } else if (obj[field] === null) {
      obj[field] = '';
    } else if (obj[field] === undefined) {
      delete obj[field];
    }
  }

  return obj;
};

export default formatDateFieldsToDb;
