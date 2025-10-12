import { BaseModel } from './BaseModel.js';
import { LabeledStringValue } from './LabeledStringValue.js';
import { AppFeature, UiLanguage, UserRole } from '../enums.js';
import { Model } from './Model.js';
import { UserBlock } from './UserBlock.js';
import { UserMetadata } from './UserMetadata.js';
import { UserPreferences } from './UserPreferences.js';

export abstract class SidUser extends BaseModel implements Model {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public firstName?: string | null;
  public lastName?: string | null;
  public userHandle?: string | null;
  public phoneNumber?: string | null;
  public phoneNumberUpdatedAt?: string | null;
  public isPhoneNumberVerified = false;
  public email?: string | null;
  public emailUpdatedAt?: string | null;
  public isEmailVerified = false;
  public genderTextId?: string | null;
  public cityOfResidence?: string | null;
  public regionOfResidence?: string | null;
  public countryOfResidenceTextId?: string | null;
  public postalCode?: string | null;
  public avatarUrl?: string | null;
  public websites?: LabeledStringValue[] | null;
  public inviteCode?: string | null;
  public passwordHash?: string | null;
  public passwordUpdatedAt?: string | null;
  public preferredLanguageTextId?: string | null;
  public spokenLanguagesTextIds: string[] = [];
  public selectedUiLanguageTextId?: UiLanguage | null;
  public fallbackUiLanguageTextId?: UiLanguage | null;
  public discoverable?: boolean | null;
  public roles: UserRole[] = [];
  public appFeatures?: AppFeature[] | null;
  public source?: string | null;
  public timezone?: string | null;
  public preferences?: UserPreferences | null;
  public trustLevel = 1;
  public userBlocks?: UserBlock[] | null;
  declare public metadata?: UserMetadata | null;
  public termsAndConditionsAcceptedAt?: string | null;
  public optIntoNewsletter?: boolean | null;
  public onboardingStage?: string | null;
  public isTestUser?: boolean | null;
  public signedInAt?: string | null;
  public signedOutAt?: string | null;
  public latestActivityAt?: string | null;
  public inactivatedAt?: string | null;
  public inactivatedBy?: string | null;
  public suspendedAt?: string | null;
  public suspendedBy?: string | null;
  public anonymizedAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidUser>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.firstName !== undefined) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName !== undefined) {
        this.lastName = attributes.lastName;
      }
      if (attributes.userHandle !== undefined) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.phoneNumber !== undefined) {
        this.phoneNumber = attributes.phoneNumber;
      }
      if (attributes.phoneNumberUpdatedAt !== undefined && attributes.phoneNumberUpdatedAt !== '') {
        this.phoneNumberUpdatedAt = attributes.phoneNumberUpdatedAt;
      }
      if (attributes.isPhoneNumberVerified !== undefined) {
        this.isPhoneNumberVerified = attributes.isPhoneNumberVerified;
      }
      if (attributes.email !== undefined) {
        this.email = attributes.email;
      }
      if (attributes.emailUpdatedAt !== undefined && attributes.emailUpdatedAt !== '') {
        this.emailUpdatedAt = attributes.emailUpdatedAt;
      }
      if (attributes.isEmailVerified !== undefined) {
        this.isEmailVerified = attributes.isEmailVerified;
      }
      if (attributes.genderTextId !== undefined) {
        this.genderTextId = attributes.genderTextId;
      }
      if (attributes.cityOfResidence !== undefined) {
        this.cityOfResidence = attributes.cityOfResidence;
      }
      if (attributes.regionOfResidence !== undefined) {
        this.regionOfResidence = attributes.regionOfResidence;
      }
      if (attributes.countryOfResidenceTextId !== undefined) {
        this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
      }
      if (attributes.postalCode !== undefined) {
        this.postalCode = attributes.postalCode;
      }
      if (attributes.avatarUrl !== undefined) {
        this.avatarUrl = attributes.avatarUrl;
      }
      if (attributes.websites !== undefined) {
        this.websites = attributes.websites;
      }
      if (attributes.inviteCode !== undefined) {
        this.inviteCode = attributes.inviteCode;
      }
      if (attributes.passwordHash !== undefined) {
        this.passwordHash = attributes.passwordHash;
      }
      if (attributes.passwordUpdatedAt !== undefined && attributes.passwordUpdatedAt !== '') {
        this.passwordUpdatedAt = attributes.passwordUpdatedAt;
      }
      if (attributes.preferredLanguageTextId !== undefined) {
        this.preferredLanguageTextId = attributes.preferredLanguageTextId;
      }
      if (attributes.spokenLanguagesTextIds !== undefined) {
        this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
      }
      if (attributes.selectedUiLanguageTextId !== undefined) {
        this.selectedUiLanguageTextId = attributes.selectedUiLanguageTextId;
      }
      if (attributes.fallbackUiLanguageTextId !== undefined) {
        this.fallbackUiLanguageTextId = attributes.fallbackUiLanguageTextId;
      }
      if (attributes.discoverable !== undefined) {
        this.discoverable = attributes.discoverable;
      }
      if (attributes.roles !== undefined) {
        this.roles = attributes.roles;
      }
      if (attributes.appFeatures !== undefined) {
        this.appFeatures = attributes.appFeatures;
      }
      if (attributes.source !== undefined) {
        this.source = attributes.source;
      }
      if (attributes.timezone !== undefined) {
        this.timezone = attributes.timezone;
      }
      if (attributes.preferences !== undefined) {
        this.preferences = attributes.preferences;
      }
      if (
        attributes.trustLevel === null ||
        attributes.trustLevel === 0 ||
        (
          attributes.trustLevel &&
          !isNaN(attributes.trustLevel)
        )
      ) {
        this.trustLevel = attributes.trustLevel;
      }
      if (attributes.userBlocks !== undefined) {
        this.userBlocks = attributes.userBlocks;
      }
      if (attributes.metadata !== undefined) {
        this.metadata = attributes.metadata;
      }
      if (attributes.termsAndConditionsAcceptedAt !== undefined && attributes.termsAndConditionsAcceptedAt !== '') {
        this.termsAndConditionsAcceptedAt = attributes.termsAndConditionsAcceptedAt;
      }
      if (attributes.optIntoNewsletter !== undefined) {
        this.optIntoNewsletter = attributes.optIntoNewsletter;
      }
      if (attributes.onboardingStage !== undefined) {
        this.onboardingStage = attributes.onboardingStage;
      }
      if (attributes.isTestUser !== undefined) {
        this.isTestUser = attributes.isTestUser;
      }
      if (attributes.signedInAt !== undefined && attributes.signedInAt !== '') {
        this.signedInAt = attributes.signedInAt;
      }
      if (attributes.signedOutAt !== undefined && attributes.signedOutAt !== '') {
        this.signedOutAt = attributes.signedOutAt;
      }
      if (attributes.latestActivityAt !== undefined && attributes.latestActivityAt !== '') {
        this.latestActivityAt = attributes.latestActivityAt;
      }
      if (attributes.inactivatedAt !== undefined && attributes.inactivatedAt !== '') {
        this.inactivatedAt = attributes.inactivatedAt;
      }
      if (attributes.inactivatedBy !== undefined) {
        this.inactivatedBy = attributes.inactivatedBy;
      }
      if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.suspendedBy !== undefined) {
        this.suspendedBy = attributes.suspendedBy;
      }
      if (attributes.anonymizedAt !== undefined && attributes.anonymizedAt !== '') {
        this.anonymizedAt = attributes.anonymizedAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
