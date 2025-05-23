import buildSelector from './buildSelector.js';
const buildQuery = (modelType, filter, match, selector, options, objectIdFunc = (id) => id, idFieldName = 'id') => {
    const query = {
        selector: selector || buildSelector(modelType, filter, match, options, objectIdFunc, idFieldName),
    };
    if (options) {
        if (options.sort) {
            query.sort = options.sort
                .filter(item => item.field)
                .map(item => ({ [item.field]: item.direction || 'asc' }));
        }
        if (!isNaN(options.skip) && options.skip > 0) {
            query.skip = options.skip;
        }
        if (!isNaN(options.limit) && options.limit > 0) {
            query.limit = options.limit;
        }
    }
    return query;
};
export default buildQuery;
//# sourceMappingURL=buildQuery.js.map