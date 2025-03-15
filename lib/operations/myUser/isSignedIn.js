import clientInfoStore from '../../helpers/clientInfoStore.js';
const isSignedIn = () => !!clientInfoStore.get().authToken;
export default isSignedIn;
//# sourceMappingURL=isSignedIn.js.map