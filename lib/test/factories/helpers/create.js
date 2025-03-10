import getFactoryByType from './getFactoryByType.js';
import db from '../../../db/db.js';
const create = async (props, modelType, options, count) => {
    if (!db.isConnected()) {
        throw new Error('db-not-available');
    }
    const factory = getFactoryByType(modelType);
    if (Array.isArray(props)) {
        const promises = props.map(async (singleProps) => {
            // @ts-ignore
            const obj = factory.build(singleProps, options);
            const { object } = await db.insert(obj);
            return object;
        });
        return await Promise.all(promises);
    }
    if (count && count > 1) {
        const promises = Array.from({ length: count }).map(async (singleProps) => {
            const obj = factory.build(singleProps, options);
            const { object } = await db.insert(obj);
            return object;
        });
        return await Promise.all(promises);
    }
    // @ts-ignore
    const obj = factory.build(props, options);
    const result = await db.insert(obj);
    return result.object;
};
export default create;
//# sourceMappingURL=create.js.map