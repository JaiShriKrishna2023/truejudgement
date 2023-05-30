import {GET_PRODUCTS_DATA, SET_PRODUCTS_DETAIL, GET_SELECTED_PRODUCTS_OPTIONS, SELECT_PRODUCT_OPTION_DETAILS} from "./shoppingViewActionTypes";

export const getProductsDataTypeAction=(data)=>({
    type:GET_PRODUCTS_DATA,
    data

});

export const setProductsDataTypeAction=(data)=>({
    type:SET_PRODUCTS_DETAIL,
    data

});

export const getSelectedProductDetailTypeAction=(data)=>({
    type:GET_SELECTED_PRODUCTS_OPTIONS,
    data

});

export const selectProductOptionDetails=(data)=>({
    type:SELECT_PRODUCT_OPTION_DETAILS,
    data

});








