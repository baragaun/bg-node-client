import type { CodegenConfig } from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
  schema: 'http://localhost:8092/fsdata/api/graphql',
  // documents: ['src/**/*.tsx'],
  generates: {
    './src/fsdata/gql/': {
      preset: 'client',
    },
  },
};
export default codegenConfig;
