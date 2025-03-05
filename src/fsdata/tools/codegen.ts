import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8092/fsdata/api/graphql',
  // documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
    },
  },
};
export default config;
