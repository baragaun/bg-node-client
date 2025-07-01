import findBrands from './operations/brand/findBrands.js';
import createChannel from './operations/channel/createChannel.js';
import findChannelById from './operations/channel/findChannelById.js';
import findChannels from './operations/channel/findChannels.js';
import findMyChannels from './operations/channel/findMyChannels.js';
import updateChannel from './operations/channel/updateChannel.js';
import acceptChannelInvitation from './operations/channelInvitation/acceptChannelInvitation.js';
import createChannelInvitation from './operations/channelInvitation/createChannelInvitation.js';
import declineChannelInvitation from './operations/channelInvitation/declineChannelInvitation.js';
import findChannelInvitations from './operations/channelInvitation/findChannelInvitations.js';
import findChannelInvitationsForUser from './operations/channelInvitation/findChannelInvitationsForUser.js';
import updateChannelInvitation from './operations/channelInvitation/updateChannelInvitation.js';
import createChannelMessage from './operations/channelMessage/createChannelMessage.js';
import findChannelMessages from './operations/channelMessage/findChannelMessages.js';
import updateChannelMessage from './operations/channelMessage/updateChannelMessage.js';
import findChannelParticipants from './operations/channelParticipant/findChannelParticipants.js';
import create from './operations/create.js';
import deleteFnc from './operations/delete.js';
import findById from './operations/findById.js';
import findGiftCardProducts from './operations/giftCardProduct/findGiftCardProducts.js';
import createMultiStepAction from './operations/multiStepAction/createMultiStepAction.js';
import findMyActiveMultiStepActions from './operations/multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './operations/multiStepAction/getMultiStepActionProgress.js';
import sendMultiStepActionNotification from './operations/multiStepAction/sendMultiStepActionNotification.js';
import verifyMultiStepActionToken from './operations/multiStepAction/verifyMultiStepActionToken.js';
import blockUserForMe from './operations/myUser/blockUserForMe.js';
import deleteMyUser from './operations/myUser/deleteMyUser.js';
import endMySession from './operations/myUser/endMySession.js';
import findAvailableUserHandle from './operations/myUser/findAvailableUserHandle.js';
import findMyInbox from './operations/myUser/findMyInbox.js';
import findMyUser from './operations/myUser/findMyUser.js';
import isUserIdentAvailable from './operations/myUser/isUserIdentAvailable.js';
import reportUser from './operations/myUser/reportUser.js';
import signInUser from './operations/myUser/signInUser.js';
import signMeOut from './operations/myUser/signMeOut.js';
import signUpUser from './operations/myUser/signUpUser.js';
import startMySession from './operations/myUser/startMySession.js';
import startMySessionV2 from './operations/myUser/startMySessionV2.js';
import unblockUserForMe from './operations/myUser/unblockUserForMe.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import verifyMyPassword from './operations/myUser/verifyMyPassword.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findProductCategories from './operations/productCategory/findProductCategories.js';
import createPurchaseOrder from './operations/purchaseOrder/createPurchaseOrder.js';
import findPurchaseOrders from './operations/purchaseOrder/findPurchaseOrders.js';
import clearMyShoppingCart from './operations/shoppingCart/clearMyShoppingCart.js';
import findMyShoppingCart from './operations/shoppingCart/findMyShoppingCart.js';
import createShoppingCartItem from './operations/shoppingCartItem/createShoppingCartItem.js';
import deleteShoppingCartItem from './operations/shoppingCartItem/deleteShoppingCartItem.js';
import updateShoppingCartItem from './operations/shoppingCartItem/updateShoppingCartItem.js';
import update from './operations/update.js';
import findUserById from './operations/user/findUserById.js';
import findUsers from './operations/user/findUsers.js';
import findMyWallet from './operations/wallet/findMyWallet.js';
import findWalletItems from './operations/walletItem/findWalletItems.js';
const fsdata = {
    create,
    delete: deleteFnc,
    findById,
    pollForUpdatedObject,
    update,
    channel: {
        createChannel,
        findChannelById,
        findChannels,
        findMyChannels,
        updateChannel,
    },
    channelInvitation: {
        acceptChannelInvitation,
        createChannelInvitation,
        declineChannelInvitation,
        findChannelInvitations,
        findChannelInvitationsForUser,
        updateChannelInvitation,
    },
    channelMessage: {
        createChannelMessage,
        findChannelMessages,
        updateChannelMessage,
    },
    channelParticipant: {
        findChannelParticipants,
    },
    giftCardProduct: {
        findGiftCardProducts,
    },
    myUser: {
        blockUserForMe,
        deleteMyUser,
        endMySession,
        findAvailableUserHandle,
        findMyInbox,
        findMyUser,
        isUserIdentAvailable,
        reportUser,
        signInUser,
        signMeOut,
        signUpUser,
        startMySession,
        startMySessionV2,
        unblockUserForMe,
        updateMyUser,
        verifyMyPassword,
    },
    multiStepAction: {
        createMultiStepAction,
        findMyActiveMultiStepActions,
        getMultiStepActionProgress,
        sendMultiStepActionNotification,
        verifyMultiStepActionToken,
    },
    productCategory: {
        findProductCategories,
    },
    purchaseOrder: {
        createPurchaseOrder,
        findPurchaseOrders,
    },
    shoppingCart: {
        findMyShoppingCart,
        clearMyShoppingCart,
    },
    shoppingCartItem: {
        createShoppingCartItem,
        deleteShoppingCartItem,
        updateShoppingCartItem,
    },
    user: {
        findUserById,
        findUsers,
    },
    brand: {
        findBrands: findBrands,
    },
    wallet: {
        findMyWallet,
    },
    walletItem: {
        findWalletItems,
    },
};
export default fsdata;
//# sourceMappingURL=fsdata.js.map