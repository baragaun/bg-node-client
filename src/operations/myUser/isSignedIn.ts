import clientInfoStore from '../../helpers/clientInfoStore.js';

const isSignedIn = (): boolean => !!clientInfoStore.get().isSignedIn;

export default isSignedIn;
