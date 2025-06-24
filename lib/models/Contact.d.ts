import { ContactMetadata } from './ContactMetadata.js';
import { SidContact } from './SidContact.js';
export declare class Contact extends SidContact {
    metadata?: ContactMetadata | null;
    constructor(attributes?: Partial<Contact>);
    static get searchFields(): string[];
}
