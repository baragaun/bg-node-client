export class VerifyMultiStepActionTokenInput {
    actionId;
    newPassword;
    token;
    constructor(attributes) {
        if (attributes) {
            if (attributes.actionId) {
                this.actionId = attributes.actionId;
            }
            if (attributes.newPassword) {
                this.newPassword = attributes.newPassword;
            }
            if (attributes.token) {
                this.token = attributes.token;
            }
        }
    }
}
//# sourceMappingURL=VerifyMultiStepActionTokenInput.js.map