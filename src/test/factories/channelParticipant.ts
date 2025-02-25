import FactoryGirl from 'factory-girl'

// import chance from '../helpers/chance.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js'

const attrs: FactoryGirl.Attributes<Partial<ChannelParticipant>> = {
}

const initChannelParticipantFactory = (): void => {
  FactoryGirl.factory.define<ChannelParticipant>(
    'ChannelParticipant',
    ChannelParticipant,
    attrs,
  )
}

export default initChannelParticipantFactory
