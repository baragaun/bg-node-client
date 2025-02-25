import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelListFilter: TypeGraphqlClass = {
  name: 'BgChannelListFilter',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseListFilter',
  path: 'src/services/bgChannels/types/classes/BgChannelListFilter.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
  ]
}

export default bgChannelListFilter
