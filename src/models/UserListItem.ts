import { LabeledStringValue } from './LabeledStringValue.js';
import { UserBlock } from './UserBlock.js';
import { UserRole } from '../enums.js';
import {
  AcademicExperience,
  BusinessExperience, MenteesGroupMembership,
  MentorsGroupMembership,
} from '../fsdata/gql/graphql.js';
import { IGroupMembership } from '../types/IGroupMembership.js';

export class UserListItem {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public id = '';
  public createdAt: string = new Date().toISOString();
  public updatedAt?: string | null;
  public deletedAt?: string | null;
  public userHandle?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public avatarUrl?: string | null;
  public genderTextId?: string | null;
  public websites?: LabeledStringValue[] | null;
  public preferredLanguageTextId?: string | null;
  public spokenLanguagesTextIds: string[] = [];
  public countryOfResidenceTextId?: string | null;
  public regionOfResidence?: string | null;
  public cityOfResidence?: string | null;
  public timezone?: string | null;
  public roles: UserRole[] = [];
  public discoverable?: boolean | null;
  public trustLevel = 1;
  public userBlocks?: UserBlock[] | null;
  public latestActivityAt?: string | null;
  public inactivatedAt?: string | null;
  public suspendedAt?: string | null;
  public seeksHelp?: boolean | null;
  public offersHelp?: boolean | null;
  public yearsManagementExperience?: number | null;
  public yearsOwnershipExperience?: number | null;
  public academicExperiences?: AcademicExperience[] | null = [];
  public businessExperiences?: BusinessExperience[] | null = [];
  public isOnVacation?: boolean | null;
  public mentor?: MentorsGroupMembership | null;
  public mentee?: MenteesGroupMembership | null;
  public groupMemberships: IGroupMembership[] = [];
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<UserListItem>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.id !== undefined) {
        this.id = attributes.id;
      }
      if (attributes.createdAt !== undefined && attributes.createdAt !== '') {
        this.createdAt = attributes.createdAt;
      }
      if (attributes.updatedAt !== undefined && attributes.updatedAt !== '') {
        this.updatedAt = attributes.updatedAt;
      }
      if (attributes.deletedAt !== undefined && attributes.deletedAt !== '') {
        this.deletedAt = attributes.deletedAt;
      }
      if (attributes.userHandle !== undefined) {
        this.userHandle = attributes.userHandle;
      }
      if (attributes.firstName !== undefined) {
        this.firstName = attributes.firstName;
      }
      if (attributes.lastName !== undefined) {
        this.lastName = attributes.lastName;
      }
      if (attributes.avatarUrl !== undefined) {
        this.avatarUrl = attributes.avatarUrl;
      }
      if (attributes.genderTextId !== undefined) {
        this.genderTextId = attributes.genderTextId;
      }
      if (attributes.websites !== undefined) {
        this.websites = attributes.websites;
      }
      if (attributes.preferredLanguageTextId !== undefined) {
        this.preferredLanguageTextId = attributes.preferredLanguageTextId;
      }
      if (attributes.spokenLanguagesTextIds !== undefined) {
        this.spokenLanguagesTextIds = attributes.spokenLanguagesTextIds;
      }
      if (attributes.countryOfResidenceTextId !== undefined) {
        this.countryOfResidenceTextId = attributes.countryOfResidenceTextId;
      }
      if (attributes.regionOfResidence !== undefined) {
        this.regionOfResidence = attributes.regionOfResidence;
      }
      if (attributes.cityOfResidence !== undefined) {
        this.cityOfResidence = attributes.cityOfResidence;
      }
      if (attributes.timezone !== undefined) {
        this.timezone = attributes.timezone;
      }
      if (attributes.roles !== undefined) {
        this.roles = attributes.roles;
      }
      if (attributes.discoverable !== undefined) {
        this.discoverable = attributes.discoverable;
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
      if (attributes.latestActivityAt !== undefined && attributes.latestActivityAt !== '') {
        this.latestActivityAt = attributes.latestActivityAt;
      }
      if (attributes.inactivatedAt !== undefined && attributes.inactivatedAt !== '') {
        this.inactivatedAt = attributes.inactivatedAt;
      }
      if (attributes.suspendedAt !== undefined && attributes.suspendedAt !== '') {
        this.suspendedAt = attributes.suspendedAt;
      }
      if (attributes.seeksHelp !== undefined) {
        this.seeksHelp = attributes.seeksHelp;
      }
      if (attributes.offersHelp !== undefined) {
        this.offersHelp = attributes.offersHelp;
      }
      if (
        attributes.yearsManagementExperience === null ||
        attributes.yearsManagementExperience === 0 ||
        (
          attributes.yearsManagementExperience &&
          !isNaN(attributes.yearsManagementExperience)
        )
      ) {
        this.yearsManagementExperience = attributes.yearsManagementExperience;
      }
      if (
        attributes.yearsOwnershipExperience === null ||
        attributes.yearsOwnershipExperience === 0 ||
        (
          attributes.yearsOwnershipExperience &&
          !isNaN(attributes.yearsOwnershipExperience)
        )
      ) {
        this.yearsOwnershipExperience = attributes.yearsOwnershipExperience;
      }
      if (attributes.academicExperiences !== undefined) {
        this.academicExperiences = attributes.academicExperiences;
      }
      if (attributes.businessExperiences !== undefined) {
        this.businessExperiences = attributes.businessExperiences;
      }
      if (attributes.isOnVacation !== undefined) {
        this.isOnVacation = attributes.isOnVacation;
      }
      if (attributes.mentor !== undefined) {
        this.mentor = attributes.mentor;
      }
      if (attributes.mentee !== undefined) {
        this.mentee = attributes.mentee;
      }
      if (attributes.groupMemberships !== undefined) {
        this.groupMemberships = attributes.groupMemberships;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }

  static get searchFields(): string[] {
    return ['firstName', 'lastName', 'userHandle'];
  }
}
