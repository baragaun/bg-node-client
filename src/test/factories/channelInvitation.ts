import FactoryGirl from 'factory-girl';

import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import chance from '../helpers/chance.js';

const attrs: FactoryGirl.Attributes<Partial<ChannelInvitation>> = {
  channelName: () => chance.word(),
  channelTopic: () => chance.sentence(),
  messageText: () => chance.sentence(),
}

const initChannelInvitationFactory = (): void => {
  FactoryGirl.factory.define<ChannelInvitation>(
    'ChannelInvitation',
    ChannelInvitation,
    attrs,
  )
}

export default initChannelInvitationFactory
