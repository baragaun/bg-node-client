export class VerifyMultiStepActionTokenInput {
  public actionId: string;
  public newPassword?: string;
  public token: string;

  constructor(attributes?: Partial<VerifyMultiStepActionTokenInput>) {
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
