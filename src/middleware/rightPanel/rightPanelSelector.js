import {createSelector} from 'reselect';
import { rightPanelInitialState} from './rightPanelReducer';

export const selectRightPanelDomain=state=> state.rightPanelReducer || rightPanelInitialState;

export const selectRightPanelProps=createSelector(
    selectRightPanelDomain,({
        productCategoryType,
        selectedProduct

    })=>({
        productCategoryType,
        selectedProduct
    })

)