import chance from './chance.js';
const defaultOptions = {
    minDaysAgo: 1,
    maxDaysAgo: 500,
};
const randomDate = (options = defaultOptions) => {
    return new Date(Date.now() -
        chance.integer({
            min: options.minDaysAgo * 24 * 3600 * 1000, // youngest is 1 day old
            max: options.maxDaysAgo * 24 * 3600 * 1000, // oldest is 500 days old
        })).toISOString();
};
export default randomDate;
//# sourceMappingURL=randomDate.js.map