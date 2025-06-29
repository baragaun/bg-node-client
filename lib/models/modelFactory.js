import { ModelType } from '../enums.js';
import { Brand } from './Brand.js';
import { Channel } from './Channel.js';
import { ChannelInvitation } from './ChannelInvitation.js';
import { ChannelMessage } from './ChannelMessage.js';
import { ChannelParticipant } from './ChannelParticipant.js';
import { ClientInfo } from './ClientInfo.js';
import { GiftCardProduct } from './GiftCardProduct.js';
import { MyUser } from './MyUser.js';
import { Product } from './Product.js';
import { PurchaseOrder } from './PurchaseOrder.js';
import { PurchaseOrderItem } from './PurchaseOrderItem.js';
import { ServiceRequest } from './ServiceRequest.js';
import { ShoppingCart } from './ShoppingCart.js';
import { ShoppingCartItem } from './ShoppingCartItem.js';
import { SidMultiStepAction } from './SidMultiStepAction.js';
import { User } from './User.js';
import { UserInbox } from './UserInbox.js';
import { Wallet } from './Wallet.js';
import { WalletItem } from './WalletItem.js';
const modelFactory = (props, modelType) => {
    if (modelType === ModelType.Brand) {
        return new Brand(props);
    }
    if (modelType === ModelType.Channel) {
        return new Channel(props);
    }
    if (modelType === ModelType.ChannelInvitation) {
        return new ChannelInvitation(props);
    }
    if (modelType === ModelType.ChannelMessage) {
        return new ChannelMessage(props);
    }
    if (modelType === ModelType.ChannelParticipant) {
        return new ChannelParticipant(props);
    }
    if (modelType === ModelType.ClientInfo) {
        return new ClientInfo(props);
    }
    if (modelType === ModelType.GiftCardProduct) {
        return new GiftCardProduct(props);
    }
    if (modelType === ModelType.MyUser) {
        return new MyUser(props);
    }
    if (modelType === ModelType.PurchaseOrder) {
        return new PurchaseOrder(props);
    }
    if (modelType === ModelType.Product) {
        return new Product(props);
    }
    if (modelType === ModelType.PurchaseOrderItem) {
        return new PurchaseOrderItem(props);
    }
    if (modelType === ModelType.ShoppingCart) {
        return new ShoppingCart(props);
    }
    if (modelType === ModelType.ShoppingCartItem) {
        return new ShoppingCartItem(props);
    }
    if (modelType === ModelType.ServiceRequest) {
        return new ServiceRequest(props);
    }
    if (modelType === ModelType.SidMultiStepAction) {
        return new SidMultiStepAction(props);
    }
    if (modelType === ModelType.User) {
        return new User(props);
    }
    // if (modelType === ModelType.UserBlock) {
    //   return new UserBlock(props as unknown as Partial<UserBlock>) as unknown as T;
    // }
    if (modelType === ModelType.UserInbox) {
        return new UserInbox(props);
    }
    if (modelType === ModelType.Wallet) {
        return new Wallet(props);
    }
    if (modelType === ModelType.WalletItem) {
        return new WalletItem(props);
    }
    throw new Error(`Model type ${modelType} is not supported.`);
};
export default modelFactory;
//# sourceMappingURL=modelFactory.js.map