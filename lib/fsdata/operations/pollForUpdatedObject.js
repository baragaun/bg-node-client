import findById from './findById.js';
const pollForUpdatedObject = (id, modelType, options) => {
    return new Promise((resolve, reject) => {
        let activeIsInTargetStateFunc;
        if (options.polling.isInTargetStateFunc === 'watch-updated-at') {
            if (options.polling.oldUpdatedAt) {
                activeIsInTargetStateFunc = (obj) => obj.updatedAt !== options.polling.oldUpdatedAt;
            }
            else {
                console.error('api.updateUser: watch-updated-at should not be used on a new insert.');
            }
        }
        else if (options.polling.isInTargetStateFunc) {
            activeIsInTargetStateFunc = options.polling.isInTargetStateFunc;
        }
        const poll = () => {
            findById(id, modelType).then((object) => {
                if (!activeIsInTargetStateFunc || activeIsInTargetStateFunc(object)) {
                    // The object is now in the expected state (or no expected state was provided)
                    resolve(object);
                }
                setTimeout(() => {
                    poll();
                }, options.polling.interval || 1000); // default to 1 second
            }, (error) => {
                console.error('api.updateUser: error', { error });
                reject(error);
            });
        };
        setTimeout(() => {
            poll();
        }, options.polling.initialDelay || 1000); // default to 1 second
    });
};
export default pollForUpdatedObject;
//# sourceMappingURL=pollForUpdatedObject.js.map