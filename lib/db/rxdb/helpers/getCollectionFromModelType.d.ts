import { RxCollection } from 'rxdb';
import { ModelType } from '../../../types/enums.js';
declare const getCollectionFromModelType: (type: ModelType) => RxCollection | null;
export default getCollectionFromModelType;
