import { LabeledStringValue } from './LabeledStringValue.js';
export declare class Company {
    userIds?: string[] | null;
    name: string;
    description?: string | null;
    location?: string | null;
    companyTypeTextId?: string | null;
    companyStageTextId?: string | null;
    websites?: LabeledStringValue[] | null;
    industries?: string[] | null;
    isOperational?: boolean | null;
    isFundraising?: boolean | null;
    annualRevenue?: number | null;
    employeeCount?: number | null;
    foundedAt?: string | null;
    constructor(attributes?: Partial<Company>);
}
