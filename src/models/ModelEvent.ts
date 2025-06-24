/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/

import { ModelEventType } from '../enums.js';

export class ModelEvent {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public time: Date = new Date();
  public modelEventType: ModelEventType = ModelEventType.info;
  public message = '';
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  public constructor(attributes?: Partial<ModelEvent>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.time) {
        this.time = attributes.time;
      }
      if (attributes.modelEventType) {
        this.modelEventType = attributes.modelEventType;
      }
      if (attributes.message) {
        this.message = attributes.message;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
