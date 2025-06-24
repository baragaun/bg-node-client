export class SendMultiStepActionNotificationInput {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    actionId = '';
    notificationMethod;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.actionId) {
                this.actionId = attributes.actionId;
            }
            if (attributes.notificationMethod) {
                this.notificationMethod = attributes.notificationMethod;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SendMultiStepActionNotificationInput.js.map