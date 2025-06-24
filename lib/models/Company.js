export class Company {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userIds = [];
    name = '';
    description;
    location;
    companyTypeTextId;
    companyStageTextId;
    websites;
    industries;
    isOperational;
    isFundraising;
    annualRevenue;
    employeeCount;
    foundedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userIds !== undefined) {
                this.userIds = attributes.userIds;
            }
            if (attributes.name !== undefined) {
                this.name = attributes.name;
            }
            if (attributes.description !== undefined) {
                this.description = attributes.description;
            }
            if (attributes.location !== undefined) {
                this.location = attributes.location;
            }
            if (attributes.companyTypeTextId !== undefined) {
                this.companyTypeTextId = attributes.companyTypeTextId;
            }
            if (attributes.companyStageTextId !== undefined) {
                this.companyStageTextId = attributes.companyStageTextId;
            }
            if (attributes.websites !== undefined) {
                this.websites = attributes.websites;
            }
            if (attributes.industries !== undefined) {
                this.industries = attributes.industries;
            }
            if (attributes.isOperational !== undefined) {
                this.isOperational = attributes.isOperational;
            }
            if (attributes.isFundraising !== undefined) {
                this.isFundraising = attributes.isFundraising;
            }
            if (attributes.annualRevenue === null ||
                attributes.annualRevenue === 0 ||
                (attributes.annualRevenue &&
                    !isNaN(attributes.annualRevenue))) {
                this.annualRevenue = attributes.annualRevenue;
            }
            if (attributes.employeeCount === null ||
                attributes.employeeCount === 0 ||
                (attributes.employeeCount &&
                    !isNaN(attributes.employeeCount))) {
                this.employeeCount = attributes.employeeCount;
            }
            if (attributes.foundedAt !== undefined && attributes.foundedAt !== '') {
                this.foundedAt = attributes.foundedAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=Company.js.map