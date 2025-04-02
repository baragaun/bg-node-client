import helpers from './helpers.js';
import libData from '../../helpers/libData.js';
import { Graffle } from '../graffle/__.js';
let _graffleClient;
const graffleClientStore = {
    set: (client) => {
        _graffleClient = client;
    },
    get: () => {
        if (!_graffleClient) {
            const outputConfig = {
                defaults: {
                    errorChannel: 'return',
                },
                envelope: {
                    enabled: true,
                    errors: {
                        execution: true,
                        other: true,
                    },
                },
                errors: {
                    execution: 'return',
                    other: 'return',
                },
            };
            // @ts-ignore
            _graffleClient = Graffle.create({ output: outputConfig })
                // @ts-ignore
                .transport({
                url: libData.config().fsdata.url,
                // headers: helpers.headers(),
            })
                .anyware(({ pack }) => {
                if (pack.input.transportType !== 'http')
                    return pack();
                return pack({
                    input: {
                        ...pack.input,
                        headers: helpers.headers(),
                    },
                });
            });
        }
        // _graffleClient.transport({
        //   url: libData.config().fsdata.url,
        //   headers: helpers.headers(),
        // })
        //
        return _graffleClient;
    },
};
export default graffleClientStore;
//# sourceMappingURL=graffleClientStore.js.map