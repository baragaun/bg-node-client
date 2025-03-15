import clientInfoStore from '../../helpers/clientInfoStore.js';

const isSignedIn = (): boolean => !!clientInfoStore.get().authToken;

export default isSignedIn;
