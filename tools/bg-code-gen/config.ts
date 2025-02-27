import { BgCodeGenProject, JsonSchemaTask } from '../../types.js'
import { TaskType } from '../../enums.js'
import baseModel from './models/first-spark-server/baseModel.js'
import bgChannel from './models/channels-service/bgChannel.js'
import bgChannelChangedEvent from './models/channels-service/bgChannelChangedEvent.js'
import bgChannelInbox from './models/channels-service/bgChannelInbox.js'
import bgChannelInboxItemInvitation from './models/channels-service/bgChannelInboxItemInvitation.js'
import bgChannelInboxItemMessage from './models/channels-service/bgChannelInboxItemMessage.js'
import bgChannelInput from './models/channels-service/bgChannelInput.js'
import bgChannelInvitation from './models/channels-service/bgChannelInvitation.js'
import bgChannelListFilter from './models/channels-service/bgChannelListFilter.js'
import bgChannelMessage from './models/channels-service/bgChannelMessage.js'
import bgChannelMessageListFilter from './models/channels-service/bgChannelMessageListFilter.js'
import bgChannelMessageMetadata from './models/channels-service/bgChannelMessageMetadata.js'
import bgChannelMessageStatus from './models/channels-service/bgChannelMessageStatus.js'
import bgChannelMetadata from './models/channels-service/bgChannelMetadata.js'
import bgChannelParticipant from './models/channels-service/bgChannelParticipant.js'
import bgChannelParticipantMetadata from './models/channels-service/bgChannelParticipantMetadata.js'
import bgChannelStatus from './models/channels-service/bgChannelStatus.js'
import bgChannelStatusInput from './models/channels-service/bgChannelStatusInput.js'
import bgChannelsUserMetadata from './models/channels-service/bgChannelsUserMetadata.js'
import bgLatestUnseenChannelMessageInfo from './models/channels-service/bgLatestUnseenChannelMessageInfo.js'
import sidUser from './models/secureid-service/sidUser.js';

const jsonSchemaTask: JsonSchemaTask = {
  taskType: TaskType.jsonSchema,
  projectRoot: process.env.APP_ROOT || '../bg-node-client',
  active: true,
  models: [
    baseModel,
    bgChannel,
    bgChannelChangedEvent,
    bgChannelInbox,
    bgChannelInboxItemInvitation,
    bgChannelInboxItemMessage,
    bgChannelInput,
    bgChannelInvitation,
    bgChannelListFilter,
    bgChannelMessage,
    bgChannelMessageListFilter,
    bgChannelMessageMetadata,
    bgChannelMessageStatus,
    bgChannelMetadata,
    bgChannelParticipant,
    bgChannelParticipantMetadata,
    bgChannelStatus,
    bgChannelStatusInput,
    bgChannelsUserMetadata,
    bgLatestUnseenChannelMessageInfo,
    sidUser,
  ],
}

const config: BgCodeGenProject = {
  tasks: [
    jsonSchemaTask,
  ]
}

export default config
