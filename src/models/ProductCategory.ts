export class ProductCategory {
  public name = '';
  public labelEn = '';
  public priority = 0;

  constructor(attributes?: Partial<ProductCategory>) {
    if (attributes) {
      if (attributes.name) {
        this.name = attributes.name;
      }
      if (attributes.labelEn) {
        this.labelEn = attributes.labelEn;
      }
      if (
        attributes.priority === 0 ||
        (
          attributes.priority &&
          !isNaN(attributes.priority)
        )
      ) {
        this.priority = attributes.priority;
      }
    }
  }
}
