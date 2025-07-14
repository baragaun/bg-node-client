import { BaseModel } from './BaseModel.js';
import { ModelEvent } from './ModelEvent.js';
// import {
//   ServiceRequestMessageId,
//   ServiceRequestResult,
//   ServiceRequestSource,
//   ServiceRequestType,
//   UserRole } from '../fsdata/gql/graphql.js';
import { ModelType, ServiceRequestResult, UserRole } from '../enums.js';
import {
  ErrorCode,
  ServiceRequestMessageId,
  ServiceRequestSource,
  ServiceRequestType,
} from '../fsdata/gql/graphql.js';

export class ServiceRequest extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public serviceRequestType: ServiceRequestType = ServiceRequestType.unset;
  public userRoles?: UserRole[] | null;
  public objectIds?: string[] | null;
  public modelTypes?: ModelType[] | null;
  public result: ServiceRequestResult = ServiceRequestResult.unset;
  public messageIds?: ServiceRequestMessageId[] | null;
  public message?: string | null;
  public errorCode?: ErrorCode | null;
  public deviceUuid?: string | null;
  public source?: ServiceRequestSource | null;
  public finishedAt?: string | null;
  public expiresAt?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<ServiceRequest>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.serviceRequestType !== undefined) {
        this.serviceRequestType = attributes.serviceRequestType;
      }
      if (attributes.userRoles !== undefined) {
        this.userRoles = attributes.userRoles;
      }
      if (attributes.objectIds !== undefined) {
        this.objectIds = attributes.objectIds;
      }
      if (attributes.modelTypes !== undefined) {
        this.modelTypes = attributes.modelTypes;
      }
      if (attributes.result !== undefined) {
        this.result = attributes.result;
      }
      if (attributes.messageIds !== undefined) {
        this.messageIds = attributes.messageIds;
      }
      if (attributes.message !== undefined) {
        this.message = attributes.message;
      }
      if (attributes.errorCode !== undefined) {
        this.errorCode = attributes.errorCode;
      }
      if (attributes.deviceUuid !== undefined) {
        this.deviceUuid = attributes.deviceUuid;
      }
      if (attributes.source !== undefined) {
        this.source = attributes.source;
      }
      if (attributes.finishedAt !== undefined && attributes.finishedAt !== '') {
        this.finishedAt = attributes.finishedAt;
      }
      if (attributes.expiresAt !== undefined && attributes.expiresAt !== '') {
        this.expiresAt = attributes.expiresAt;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
