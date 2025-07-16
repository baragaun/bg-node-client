import { BaseModel } from './BaseModel.js';
import { ModelType, ServiceRequestResult, UserRole } from '../enums.js';
import { ErrorCode, ServiceRequestMessageId, ServiceRequestSource, ServiceRequestType } from '../fsdata/gql/graphql.js';
export declare class ServiceRequest extends BaseModel {
    serviceRequestType: ServiceRequestType;
    userRoles?: UserRole[] | null;
    objectIds?: string[] | null;
    modelTypes?: ModelType[] | null;
    result: ServiceRequestResult;
    messageIds?: ServiceRequestMessageId[] | null;
    message?: string | null;
    errorCode?: ErrorCode | null;
    deviceUuid?: string | null;
    source?: ServiceRequestSource | null;
    finishedAt?: string | null;
    expiresAt?: string | null;
    constructor(attributes?: Partial<ServiceRequest>);
}
