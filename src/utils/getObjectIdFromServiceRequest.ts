import { ModelType } from '../enums.js';
import { ServiceRequest } from '../models/ServiceRequest.js';

export const getObjectIdFromServiceRequest = (
  serviceRequest: ServiceRequest,
  modelType: ModelType,
): string | undefined => {
  if (
    !Array.isArray(serviceRequest.objectIds) ||
    serviceRequest.objectIds.length < 1 ||
    !Array.isArray(serviceRequest.modelTypes) ||
    serviceRequest.modelTypes.length !== serviceRequest.objectIds.length
  ) {
    return undefined;
  }

  for (let i = 0; i < serviceRequest.objectIds.length; i++) {
    if (serviceRequest.modelTypes[i] === modelType) {
      return serviceRequest.objectIds[i];
    }
  }

  return undefined;
};
