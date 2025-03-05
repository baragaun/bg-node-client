const config = {
    schema: 'http://localhost:8092/fsdata/api/graphql',
    // documents: ['src/**/*.tsx'],
    generates: {
        './src/graphql/gql/': {
            preset: 'client',
        },
    },
};
export default config;
//# sourceMappingURL=codegen.js.map