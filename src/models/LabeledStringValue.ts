export class LabeledStringValue {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public label?: string | null;
  public value = '';
  public tags?: string[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<LabeledStringValue>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.label) {
        this.label = attributes.label;
      }
      if (attributes.value) {
        this.value = attributes.value;
      }
      if (attributes.tags) {
        this.tags = attributes.tags;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
