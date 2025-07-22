import { BaseModel } from '../models/BaseModel.js';
import { ServiceRequest } from '../models/ServiceRequest.js';

/**
 * Interface used for queries or mutations that are observed by a ServiceRequest.
 */
export interface QueryResultWithServiceRequest<T extends BaseModel> {
  object?: T;
  serviceRequest: ServiceRequest;
}
