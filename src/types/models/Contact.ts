import { ContactMetadata } from './ContactMetadata.js';
import { SidContact } from './SidContact.js';

export class Contact extends SidContact {
  declare public metadata?: ContactMetadata | null;

  constructor(attributes?: Partial<Contact>) {
    super(attributes);

    if (attributes) {
      if (attributes.metadata) {
        this.metadata = attributes.metadata;
      }
    }
  }
}
