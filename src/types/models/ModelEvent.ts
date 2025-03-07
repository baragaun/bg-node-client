/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { ModelEventType } from '../../enums.js';

export class ModelEvent {
  public time: Date = new Date();

  public modelEventType: ModelEventType = ModelEventType.info;

  public message = '';

  public constructor(attributes?: Partial<ModelEvent>) {
    if (attributes) {
      if (attributes.time) {
        this.time = attributes.time;
      }
      if (attributes.modelEventType) {
        this.modelEventType = attributes.modelEventType;
      }
      if (attributes.message) {
        this.message = attributes.message;
      }
    }
  }
}
