export class SendMultiStepActionNotificationInput {
    actionId = '';
    notificationMethod;
    constructor(attributes) {
        if (attributes) {
            if (attributes.actionId) {
                this.actionId = attributes.actionId;
            }
            if (attributes.notificationMethod) {
                this.notificationMethod = attributes.notificationMethod;
            }
        }
    }
}
//# sourceMappingURL=SendMultiStepActionNotificationInput.js.map