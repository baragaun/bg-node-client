import FactoryGirl from 'factory-girl';

import { Channel } from '../../types/models/Channel.js';
import { ChannelType } from '../../types/enums.js';
import chance from '../helpers/chance.js';


const attrs: FactoryGirl.Attributes<Partial<Channel>> = {
  channelType: () => chance.pickone(Object.values(ChannelType)),
  updatedAt: () => new Date(),
}

const initChannelFactory = (): void => {
  FactoryGirl.factory.define<Channel>('Channel', Channel, attrs)
}

export default initChannelFactory
