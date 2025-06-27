import { BaseModel } from './BaseModel.js';
import { ServiceRequestResult, ServiceRequestType } from '../fsdata/gql/graphql.js';
export class ServiceRequest extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    createdAt = '';
    deviceUuid;
    errorCode;
    events;
    expiresAt;
    finishedAt;
    message;
    messageIds;
    modelTypes;
    objectIds;
    result = ServiceRequestResult.Unset;
    serviceRequestType = ServiceRequestType.Unset;
    source;
    userId;
    userRoles;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
//# sourceMappingURL=ServiceRequest.js.map