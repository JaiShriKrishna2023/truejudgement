import {createSelector} from 'reselect';
import { shoppingViewInitialState} from './shoppingViewReducer';

export const shoppingViewPanelDomain=state=> state.shoppingViewReducer || shoppingViewInitialState;

export const selectShoppingViewProps=createSelector(
    shoppingViewPanelDomain,({
        productDetails,
        selectedProductOptionDetails,
        productOptionView,
        purchaseViewData,
        purchaseView,
        selectedQuantity,
        selectedPurchaseItem

    })=>({
        productDetails,
        selectedProductOptionDetails,
        productOptionView,
        purchaseViewData,
        purchaseView,
        selectedQuantity,
        selectedPurchaseItem
    })

)