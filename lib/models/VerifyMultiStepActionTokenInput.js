export class VerifyMultiStepActionTokenInput {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    actionId;
    newPassword;
    token;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.actionId) {
                this.actionId = attributes.actionId;
            }
            if (attributes.newPassword) {
                this.newPassword = attributes.newPassword;
            }
            if (attributes.token) {
                this.token = attributes.token;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=VerifyMultiStepActionTokenInput.js.map