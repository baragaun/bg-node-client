import { ModelType } from '../../enums.js';
import modelFields from '../helpers/modelFields.js';

export interface ModelCrudOperationDef {
  createField?: string;
  deleteField?: { field: string, returnsServiceRequest?: boolean };
  findByIdField?: string;
  updateField?: { field: string, returnsServiceRequest?: boolean };
  selections: any;
  skipVars?: boolean;
  keyFieldName?: string;
}

export const modelCrudOperations: Partial<Record<ModelType, ModelCrudOperationDef>> = {
  [ModelType.Channel]: {
    createField: 'createChannelV2',
    deleteField: { field: 'deleteChannelV2', returnsServiceRequest: true },
    findByIdField: 'findChannelById',
    updateField: { field: 'updateChannel' },
    selections: modelFields.channel,
    keyFieldName: 'id',
  },
  [ModelType.ChannelInvitation]: {
    createField: 'createChannelInvitation',
    deleteField: { field: 'deleteChannelInvitationV2', returnsServiceRequest: true },
    findByIdField: 'findChannelInvitationById',
    updateField: { field: 'updateChannelInvitation' },
    selections: modelFields.channelInvitation,
    keyFieldName: 'id',
  },
  [ModelType.ChannelMessage]: {
    createField: 'createChannelMessage',
    deleteField: { field: 'deleteChannelMessageV2', returnsServiceRequest: true },
    findByIdField: 'findChannelMessageById',
    updateField: { field: 'updateChannelMessage' },
    selections: modelFields.channelMessage,
    keyFieldName: 'id',
  },
  [ModelType.ChannelParticipant]: {
    createField: 'createChannelParticipant',
    deleteField: { field: 'deleteChannelParticipantV2', returnsServiceRequest: true },
    findByIdField: 'findChannelParticipantById',
    updateField: { field: 'updateChannelParticipant' },
    selections: modelFields.channelParticipant,
    keyFieldName: 'channelParticipantId',
  },
  [ModelType.Company]: {
    createField: 'createCompany',
    deleteField: { field: 'deleteCompanyV2', returnsServiceRequest: true },
    findByIdField: 'findCompanyById',
    updateField: { field: 'updateCompany' },
    selections: modelFields.company,
    keyFieldName: 'companyId',
  },
  [ModelType.MyUser]: {
    createField: 'createMyUser',
    deleteField: { field: 'deleteMyUserV2', returnsServiceRequest: true },
    findByIdField: 'findMyUser',
    updateField: { field: 'updateMyUser'},
    selections: modelFields.myUser,
    skipVars: true,
  },
  [ModelType.PurchaseOrder]: {
    createField: 'createPurchaseOrder',
    deleteField: { field: 'deletePurchaseOrder', returnsServiceRequest: true },
    findByIdField: 'findPurchaseOrderById',
    updateField: { field: 'updatePurchaseOrder'},
    selections: modelFields.purchaseOrder,
  },
  [ModelType.PurchaseOrderItem]: {
    createField: 'createPurchaseOrderItem',
    deleteField: { field: 'deletePurchaseOrderItem', returnsServiceRequest: true },
    findByIdField: 'findPurchaseOrderItemById',
    updateField: { field: 'updatePurchaseOrderItem'},
    selections: modelFields.purchaseOrderItem,
  },
  [ModelType.ServiceRequest]: {
    findByIdField: 'findServiceRequestById',
    selections: modelFields.serviceRequest,
    keyFieldName: 'serviceRequestId',
  },
  [ModelType.ShoppingCart]: {
    createField: 'createShoppingCart',
    // delete: { field: 'deleteShoppingCart', returnsServiceRequest: true },
    findByIdField: 'findShoppingCartById',
    updateField: { field: 'updateShoppingCart'},
    selections: modelFields.shoppingCart,
  },
  [ModelType.ShoppingCartItem]: {
    createField: 'createShoppingCartItem',
    deleteField: { field: 'deleteShoppingCartItem', returnsServiceRequest: true },
    findByIdField: 'findShoppingCartItemById',
    updateField: { field: 'updateShoppingCartItem', returnsServiceRequest: true },
    selections: modelFields.shoppingCartItem,
  },
  [ModelType.SidMultiStepAction]: {
    createField: 'createMultiStepAction',
    // delete: { field: 'deleteMultiStepAction', returnsServiceRequest: false },
    findByIdField: 'findMultiStepActionById',
    updateField: { field: 'updateMultiStepAction' },
    selections: modelFields.sidMultiStepAction,
  },
  [ModelType.SidMultiStepActionProgress]: {
    createField: 'createMultiStepActionProgress',
    deleteField: { field: 'deleteMultiStepActionProgress', returnsServiceRequest: false },
    findByIdField: 'getMultiStepActionProgress',
    updateField: { field: 'updateMultiStepActionProgress' },
    selections: modelFields.sidMultiStepActionProgress,
    keyFieldName: 'actionId',
  },
  [ModelType.User]: {
    createField: 'createUser',
    deleteField: { field: 'deleteUserV2', returnsServiceRequest: true },
    findByIdField: 'findUserById',
    updateField: { field: 'updateUser'},
    selections: modelFields.user,
    keyFieldName: 'userId',
  },
  [ModelType.Brand]: {
    createField: 'createBrand',
    deleteField: { field: 'deleteBrand', returnsServiceRequest: true },
    findByIdField: 'findBrandById',
    updateField: { field: 'updateBrand'},
    selections: modelFields.brand,
  },
  [ModelType.Wallet]: {
    createField: 'createWallet',
    // delete: { field: 'deleteWallet', returnsServiceRequest: true },
    findByIdField: 'findWalletById',
    updateField: { field: 'updateWallet'},
    selections: modelFields.wallet,
  },
  [ModelType.WalletItem]: {
    createField: 'createWalletItem',
    deleteField: { field: 'deleteWalletItem', returnsServiceRequest: true },
    findByIdField: 'findWalletItemById',
    updateField: { field: 'updateWalletItem', returnsServiceRequest: true },
    selections: modelFields.walletItem,
  },
  [ModelType.WalletItemTransfer]: {
    createField: 'createWalletItemTransfer',
    deleteField: { field: 'deleteWalletItemTransfer', returnsServiceRequest: true },
    findByIdField: 'findWalletItemTransferById',
    updateField: { field: 'updateWalletItemTransfer', returnsServiceRequest: true },
    selections: modelFields.walletItemTransfer,
  },
};
