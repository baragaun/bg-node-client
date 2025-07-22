import { BaseModel } from './BaseModel.js';
// import {
//   ServiceRequestMessageId,
//   ServiceRequestResult,
//   ServiceRequestSource,
//   ServiceRequestType,
//   UserRole } from '../fsdata/gql/graphql.js';
import { ServiceRequestResult } from '../enums.js';
import { ServiceRequestType, } from '../fsdata/gql/graphql.js';
export class ServiceRequest extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    serviceRequestType = ServiceRequestType.Unset;
    userRoles;
    objectIds;
    modelTypes;
    result = ServiceRequestResult.unset;
    messageIds;
    message;
    errorCode;
    deviceUuid;
    source;
    finishedAt;
    expiresAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
//# sourceMappingURL=ServiceRequest.js.map