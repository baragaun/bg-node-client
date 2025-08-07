import { expect } from 'vitest';
// Props:
// walletId = '';
// productId = '';
// purchaseOrderItemId = '';
// brandId = '';
// productType: ProductType = ProductType.other;
// name = '';
// price = 0;
// initialBalance = 0;
// balance = 0;
// code?: string | null;
// hasBarcode?: boolean | null;
// barcodeFormat?: BarcodeType | null;
// pin?: string | null;
// source?: WalletItemSource | null;
// imageSourceFront?: string | null;
// imageSourceBack?: string | null;
// referenceUrl?: string | null;
// termsEn?: string | null;
// termsUrl?: string | null;
// instructionsEn?: string | null;
// instructionsUrl?: string | null;
// sortIndex = 0;
// issuedAt?: string | null;
// expiresAt?: string | null;
// balanceUpdatedAt?: string | null;
// transferredAt?: string | null;
// archivedAt?: string | null;
const propsToCheck = [
    'walletId',
    'productId',
    'purchaseOrderItemId',
    'brandId',
    'productType',
    'name',
    'price',
    'initialBalance',
    'balance',
    'code',
    'hasBarcode',
    'barcodeFormat',
    'pin',
    'source',
    'imageSourceFront',
    'imageSourceBack',
    'referenceUrl',
    'termsEn',
    'termsUrl',
    'instructionsEn',
    'instructionsUrl',
    'sortIndex',
    'issuedAt',
    'expiresAt',
    'balanceUpdatedAt',
    'transferredAt',
    'archivedAt',
];
export const verifyWalletItemPropsSpecHelper = (walletItem, target) => {
    for (const key in target) {
        if (propsToCheck.includes(key)) {
            const targetValue = target[key];
            const objValue = walletItem[key];
            if (targetValue !== undefined && targetValue !== null) {
                if (typeof targetValue === 'string') {
                    expect(objValue).toBe(targetValue);
                }
                else if (Array.isArray(targetValue)) {
                    expect(objValue).toEqual(targetValue);
                }
                else if (typeof targetValue === 'object') {
                    expect(objValue).toMatchObject(targetValue);
                    // } else {
                    //   expect(targetValue).to.be(objValue);
                }
            }
        }
    }
};
//# sourceMappingURL=verifyWalletItemProps.specHelper.js.map