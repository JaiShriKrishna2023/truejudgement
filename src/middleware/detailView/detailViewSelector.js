import {createSelector} from 'reselect';
import { detailViewInitialState} from './detailViewReducer';

export const detailViewPanelDomain=state=> state.detailViewReducer || detailViewInitialState;

export const selectDetailViewProps=createSelector(
    detailViewPanelDomain,({
        selectedItem,
        itemDetails

    })=>({
        selectedItem,
        itemDetails
    })

)