import { BaseModel } from './BaseModel.js';
export class UserListItem extends BaseModel {
    firstName;
    lastName;
    userHandle;
    avatarUrl;
    genderTextId;
    websites;
    preferredLanguageTextId;
    spokenLanguagesTextIds = [];
    countryOfResidenceTextId;
    regionOfResidence;
    cityOfResidence;
    timezone;
    roles = [];
    trustLevel = 1;
    userBlocks;
    latestActivityAt;
    seeksHelp;
    offersHelp;
    groupMemberships = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.id) {
                this.id = attributes.id;
            }
            if (attributes.createdAt) {
                this.createdAt = attributes.createdAt;
            }
            if (attributes.updatedAt) {
                this.updatedAt = attributes.updatedAt;
            }
            if (attributes.userHandle) {
                this.userHandle = attributes.userHandle;
            }
            if (attributes.firstName) {
                this.firstName = attributes.firstName;
            }
            if (attributes.lastName) {
                this.lastName = attributes.lastName;
            }
            if (attributes.avatarUrl) {
                this.avatarUrl = attributes.avatarUrl;
            }
            if (attributes.genderTextId) {
                this.genderTextId = attributes.genderTextId;
            }
            if (attributes.websites) {
                this.websites = attributes.websites;
            }
            if (attributes.preferredLanguageTextId) {
                this.preferredLanguageTextId = attributes.preferredLanguageTextId;
            }
            if (attributes.spokenLanguagesTextIds) {
                this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
            }
            if (attributes.countryOfResidenceTextId) {
                this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
            }
            if (attributes.regionOfResidence) {
                this.regionOfResidence = attributes.regionOfResidence;
            }
            if (attributes.cityOfResidence) {
                this.cityOfResidence = attributes.cityOfResidence;
            }
            if (attributes.timezone) {
                this.timezone = attributes.timezone;
            }
            if (attributes.roles) {
                this.roles = attributes.roles;
            }
            if (attributes.trustLevel === 0 ||
                (attributes.trustLevel &&
                    !isNaN(attributes.trustLevel))) {
                this.trustLevel = attributes.trustLevel;
            }
            if (attributes.userBlocks) {
                this.userBlocks = attributes.userBlocks;
            }
            if (attributes.latestActivityAt) {
                if (attributes.latestActivityAt instanceof Date) {
                    this.latestActivityAt = attributes.latestActivityAt;
                }
                else {
                    this.latestActivityAt = new Date(attributes.latestActivityAt);
                }
            }
            if (attributes.seeksHelp !== undefined) {
                this.seeksHelp = attributes.seeksHelp;
            }
            if (attributes.offersHelp !== undefined) {
                this.offersHelp = attributes.offersHelp;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
    static get searchFields() {
        return ['firstName', 'lastName', 'userHandle'];
    }
}
//# sourceMappingURL=UserListItem.js.map