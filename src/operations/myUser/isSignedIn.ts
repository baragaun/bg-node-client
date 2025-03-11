import data from '../../helpers/data.js';

const isSignedIn = (): boolean => !!data.config().authToken;

export default isSignedIn;
