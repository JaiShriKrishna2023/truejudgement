import { DETAILED_VIEW } from "../detailView/detailViewActionTypes";
import { INITIATE_PRODUCT_CATEGORY_PROCESSOR } from "./productCategoryActionTypes";


export const initiateProductCategoryProcessor=(data)=>({
    type:INITIATE_PRODUCT_CATEGORY_PROCESSOR,
    data
});



