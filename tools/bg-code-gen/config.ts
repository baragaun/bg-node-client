import { BgCodeGenProject, JsonSchemaTask } from '../../types.js'
import { TaskType } from '../../enums.js';
import { enumInfos } from './enumInfos.js';
import clientInfo from './modelDefs/clientInfo.js'
import channelsModelDefs from './modelDefs/channels-service/index.js';
import secureIdModelDefs from './modelDefs/secureid-service/index.js';
import firstSparkServerModelDefs from './modelDefs/first-spark-server/index.js';

const jsonSchemaTask: JsonSchemaTask = {
  taskType: TaskType.jsonSchema,
  graphqlUrl: process.env.GRAPHQL_URL || 'http://127.0.0.1:8092/fsdata/api/graphql',
  enumInfos,
  schemaIdUrl: 'https://firstspark.social',
  enabled: true,
  modelDefs: [
    ...channelsModelDefs,
    ...secureIdModelDefs,
    ...firstSparkServerModelDefs,
    clientInfo,
  ],
}

const config: BgCodeGenProject = {
  sourceProjects: [
    {
      name: 'bg-node-client',
      rootPath: process.env.BG_NODE_CLIENT_ROOT || '../bg-node-client',
      jsonSchemaPath: 'src/models/schema',
      mongooseSchemaPath: 'src/models/mongoose',
      enabled: true,
    },
    {
      name: 'mmdata',
      rootPath: process.env.BG_NODE_CLIENT_ROOT || '../bg-node-client',
      jsonSchemaPath: 'src/models/schema',
      mongooseSchemaPath: 'src/models/mongoose',
      enabled: true,
    },
    {
      name: 'channels-service',
      rootPath: process.env.BG_NODE_CLIENT_ROOT || '../bg-node-client',
      enabled: true,
    },
    {
      name: 'secureid-service',
      rootPath: process.env.BG_NODE_CLIENT_ROOT || '../bg-node-client',
      enabled: true,
    },
  ],
  tasks: [
    jsonSchemaTask,
    // typeGraphqlTask,
    // mongooseSchemaTask,
  ],
};

export default config;
