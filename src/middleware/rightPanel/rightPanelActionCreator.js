import { SET_RIGHT_PANEL_SCREEN_TYPE, SET_SELECTED_PRODUCTS } from "./rightPanelActionTypes";

export const setRightPanelScreenTypeAction=(data)=>({
    type:SET_RIGHT_PANEL_SCREEN_TYPE,
    data

});

export const setSelectedProductTypeAction=(data)=>({
    type:SET_SELECTED_PRODUCTS,
    data

});



