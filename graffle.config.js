import { Generator } from 'graffle/generator';

// @ts-ignore
const config = Generator.configure({
  name: 'fsdata',
  outputDirPath: 'src/fsdata/graffle',
  outputCase: 'camel',
  // eslint-disable-next-line no-undef
  schema: { type: `url`, url: new URL('http://localhost:8092/fsdata/api/graphql') },
  importFormat: 'jsExtension',
  // lint: {
  //   missingCustomScalarCodec: false,
  // },
});

export default config;
