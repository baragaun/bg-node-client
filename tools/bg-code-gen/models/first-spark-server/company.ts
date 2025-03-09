import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const company: TypeGraphqlClass = {
  name: 'Company',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/accounts/types/classes/Company.ts',
  schemaPath: 'src/models/schema/companySchema.ts',
  dbCollectionName: 'companies',
  active: true,
  attributes: [
    { name: 'userIds', dataType: 'string[]', default: '[]', optional: true },
    { name: 'name', dataType: 'string' },
    { name: 'description', dataType: 'string', optional: true },
    { name: 'location', dataType: 'string', optional: true },
    { name: 'companyTypeTextId', dataType: 'string', optional: true },
    { name: 'companyStageTextId', dataType: 'string', optional: true },
    { name: 'websites', dataType: 'LabeledStringValue[]', optional: true },
    { name: 'industries', dataType: 'string[]', optional: true },
    { name: 'isOperational', dataType: 'boolean', optional: true },
    { name: 'isFundraising', dataType: 'boolean', optional: true },
    { name: 'annualRevenue', dataType: 'integer', optional: true },
    { name: 'employeeCount', dataType: 'integer', optional: true },
    { name: 'foundedAt', dataType: 'date', optional: true },
    { name: 'mm2UserId', dataType: 'string', optional: true, description: 'If a Company was created from the imported attributes of an MM2 Profile, mm2UserId references the MM2 user ID. This attribute is only used by the MM2 synchronizer.' },
    { name: 'mm2CompanyRole', dataType: 'string', optional: true, description: 'If a Company was created from the imported from MM2, mm2CompanyRole is either "mentor" or "mentee". This attribute is only used by the MM2 synchronizer.' },
    { name: 'syncedWithMm2At', dataType: 'date', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
  ]
}

export default company
