export class LabeledStringValue {
  public label?: string | null
  public value = ''
  public tags?: string[] | null

  constructor(attributes?: Partial<LabeledStringValue>) {
    if (attributes) {
      if (attributes.label) {
        this.label = attributes.label
      }
      if (attributes.value) {
        this.value = attributes.value
      }
      if (attributes.tags) {
        this.tags = attributes.tags
      }
    }
  }
}
