export class ProductCategory {
  public id = '';
  public name = '';
  public labelEn = '';
  public sortIndex = 0;

  constructor(attributes?: Partial<ProductCategory>) {
    if (attributes) {
      if (attributes.id) {
        this.id = attributes.id;
      }
      if (attributes.name) {
        this.name = attributes.name;
      }
      if (attributes.labelEn) {
        this.labelEn = attributes.labelEn;
      }
      if (
        attributes.sortIndex === 0 ||
        (
          attributes.sortIndex &&
          !isNaN(attributes.sortIndex)
        )
      ) {
        this.sortIndex = attributes.sortIndex;
      }
    }
  }
}
