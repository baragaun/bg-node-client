const buildChannelObjectFilter = (filter, match) => {
    if (!filter) {
        return match || {};
    }
    const parts = match && Object.keys(match).length > 0
        ? [match]
        : [];
    if (parts.length < 2) {
        return parts[0] || {};
    }
    return { $and: parts };
};
export default buildChannelObjectFilter;
//# sourceMappingURL=buildChannelObjectFilter.js.map