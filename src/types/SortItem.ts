import { SortDirection } from '../enums.js'

export class SortItem {
  public field = ''
  public direction? = SortDirection.asc

  public constructor(attributes?: Partial<SortItem>) {
    if (attributes) {
      this.field = attributes.field || ''
      if (attributes.direction) {
        this.direction = attributes.direction
      }
    }
  }
}
