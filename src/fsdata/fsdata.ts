import findBrands from './operations/brand/findBrands.js';
import createChannel from './operations/channel/createChannel.js';
import findChannelById from './operations/channel/findChannelById.js';
import findChannels from './operations/channel/findChannels.js';
import findMyChannels from './operations/channel/findMyChannels.js';
import findMyChannelsV2 from './operations/channel/findMyChannelsV2.js';
import acceptChannelInvitation from './operations/channelInvitation/acceptChannelInvitation.js';
import createChannelInvitation from './operations/channelInvitation/createChannelInvitation.js';
import declineChannelInvitation from './operations/channelInvitation/declineChannelInvitation.js';
import findChannelInvitations from './operations/channelInvitation/findChannelInvitations.js';
import findChannelInvitationsForUser from './operations/channelInvitation/findChannelInvitationsForUser.js';
import updateChannelInvitation from './operations/channelInvitation/updateChannelInvitation.js';
import createChannelMessage from './operations/channelMessage/createChannelMessage.js';
import findChannelMessages from './operations/channelMessage/findChannelMessages.js';
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
import blockUserForMeV2 from './operations/myUser/blockUserForMeV2.js';
import deleteMyUser from './operations/myUser/deleteMyUser.js';
import deleteMyUserV2 from './operations/myUser/deleteMyUserV2.js';
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
import unblockUserForMeV2 from './operations/myUser/unblockUserForMeV2.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import verifyMyPassword from './operations/myUser/verifyMyPassword.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findProductCategories from './operations/productCategory/findProductCategories.js';
import createPurchaseOrder from './operations/purchaseOrder/createPurchaseOrder.js';
import findPurchaseOrders from './operations/purchaseOrder/findPurchaseOrders.js';
import clearMyShoppingCart from './operations/shoppingCart/clearMyShoppingCart.js';
import findMyShoppingCart from './operations/shoppingCart/findMyShoppingCart.js';
import createShoppingCartItem from './operations/shoppingCartItem/createShoppingCartItem.js';
import update from './operations/update.js';
import findUserById from './operations/user/findUserById.js';
import findUsers from './operations/user/findUsers.js';
import findMyWallet from './operations/wallet/findMyWallet.js';
import createWalletItem from './operations/walletItem/createWalletItem.js';
import findWalletItemByTransferSlug from './operations/walletItem/findWalletItemByTransferSlug.js';
import findWalletItems from './operations/walletItem/findWalletItems.js';
import acceptWalletItemTransfer from './operations/walletItemTransfer/acceptWalletItemTransfer.js';
import createWalletItemTransfer from './operations/walletItemTransfer/createWalletItemTransfer.js';
import declineWalletItemTransfer from './operations/walletItemTransfer/declineWalletItemTransfer.js';
import findWalletItemTransfers from './operations/walletItemTransfer/findWalletItemTransfers.js';

// deleteChannelInvitationV2
// deleteChannelMessageV2
// deleteChannelParticipantV2
// deleteChannelV2
// deleteCompanyV2
// deleteMyUserV2
// deleteUserV2
// endMySessionV2
// startMySessionV2
// unblockUserForMeV2
// findMyChannelsV2

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
    findMyChannelsV2,
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
  },

  channelParticipant: {
    findChannelParticipants,
  },

  giftCardProduct: {
    findGiftCardProducts,
  },

  myUser: {
    blockUserForMe,
    blockUserForMeV2,
    deleteMyUser,
    deleteMyUserV2,
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
    unblockUserForMeV2,
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
  },

  user: {
    findUserById,
    findUsers,
  },

  brand: {
    findBrands,
  },

  wallet: {
    findMyWallet,
  },

  walletItem: {
    createWalletItem,
    findWalletItemByTransferSlug,
    findWalletItems,
  },

  walletItemTransfer: {
    acceptWalletItemTransfer,
    createWalletItemTransfer,
    declineWalletItemTransfer,
    findWalletItemTransfers,
  },
};

export default fsdata;
