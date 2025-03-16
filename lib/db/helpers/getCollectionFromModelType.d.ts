import { RxCollection } from 'rxdb';
import { ModelType } from '../../enums.js';
declare const getCollectionFromModelType: (type: ModelType) => RxCollection | null;
export default getCollectionFromModelType;
