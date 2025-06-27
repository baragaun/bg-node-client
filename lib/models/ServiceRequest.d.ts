import { BaseModel } from './BaseModel.js';
import { ModelEvent } from './ModelEvent.js';
import { ServiceRequestMessageId, ServiceRequestResult, ServiceRequestSource, ServiceRequestType, UserRole } from '../fsdata/gql/graphql.js';
export declare class ServiceRequest extends BaseModel {
    createdAt: string;
    deviceUuid?: string | null;
    errorCode?: string | null;
    events?: ModelEvent[] | null;
    expiresAt?: string | null;
    finishedAt?: string | null;
    message?: string | null;
    messageIds?: ServiceRequestMessageId[] | null;
    modelTypes?: string[] | null;
    objectIds?: string[] | null;
    result: ServiceRequestResult;
    serviceRequestType: ServiceRequestType;
    source?: ServiceRequestSource | null;
    userId?: string | null;
    userRoles?: UserRole[] | null;
    constructor(attributes?: Partial<ServiceRequest>);
}
