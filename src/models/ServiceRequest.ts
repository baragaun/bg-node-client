import { BaseModel } from './BaseModel.js';
import { ModelEvent } from './ModelEvent.js';
import { ServiceRequestMessageId, ServiceRequestResult, ServiceRequestSource, ServiceRequestType, UserRole } from '../fsdata/gql/graphql.js';

export class ServiceRequest extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public createdAt = '';
  public deviceUuid?: string | null;
  public errorCode?: string | null;
  public events?: ModelEvent[] | null;
  public expiresAt?: string | null;
  public finishedAt?: string | null;
  public message?: string | null;
  public messageIds?: ServiceRequestMessageId[] | null;
  public modelTypes?: string[] | null;
  public objectIds?: string[] | null;
  public result: ServiceRequestResult = ServiceRequestResult.Unset;
  public serviceRequestType: ServiceRequestType = ServiceRequestType.Unset;
  public source?: ServiceRequestSource | null;

  public userId?: string | null;
  public userRoles?: UserRole[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ServiceRequest>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.createdAt !== undefined) {
        this.createdAt = attributes.createdAt;
      }
      if (attributes.createdBy !== undefined) {
        this.createdBy = attributes.createdBy;
      }
      if (attributes.deletedAt !== undefined) {
        this.deletedAt = attributes.deletedAt;
      }
      if (attributes.deletedBy !== undefined) {
        this.deletedBy = attributes.deletedBy;
      }
      if (attributes.deviceUuid !== undefined) {
        this.deviceUuid = attributes.deviceUuid;
      }
      if (attributes.errorCode !== undefined) {
        this.errorCode = attributes.errorCode;
      }
      if (attributes.events !== undefined) {
        this.events = attributes.events;
      }
      if (attributes.expiresAt !== undefined) {
        this.expiresAt = attributes.expiresAt;
      }
      if (attributes.finishedAt !== undefined) {
        this.finishedAt = attributes.finishedAt;
      }
      if (attributes.message !== undefined) {
        this.message = attributes.message;
      }
      if (attributes.messageIds !== undefined) {
        this.messageIds = attributes.messageIds;
      }
      if (attributes.modelTypes !== undefined) {
        this.modelTypes = attributes.modelTypes;
      }
      if (attributes.objectIds !== undefined) {
        this.objectIds = attributes.objectIds;
      }
      if (attributes.result !== undefined) {
        this.result = attributes.result;
      }
      if (attributes.serviceRequestType !== undefined) {
        this.serviceRequestType = attributes.serviceRequestType;
      }
      if (attributes.source !== undefined) {
        this.source = attributes.source;
      }
      if (attributes.updatedAt !== undefined) {
        this.updatedAt = attributes.updatedAt;
      }
      if (attributes.updatedBy !== undefined) {
        this.updatedBy = attributes.updatedBy;
      }
      if (attributes.userId !== undefined) {
        this.userId = attributes.userId;
      }
      if (attributes.userRoles !== undefined) {
        this.userRoles = attributes.userRoles;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}