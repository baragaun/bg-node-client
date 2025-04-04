import { Generator } from 'graffle/generator';

const config = Generator.configure({
  name: 'fsdata',
  outputDirPath: 'src/fsdata/graffle',
  outputCase: 'camel',
  // eslint-disable-next-line no-undef
  schema: {
    type: `url`,
    url1: new URL('http://localhost:3000/mmdata/api/graphql'),
    url: new URL('http://localhost:8092/fsdata/api/graphql'),
  },
  importFormat: 'jsExtension',
  // lint: {
  //   missingCustomScalarCodec: false,
  // },
});

export default config;
