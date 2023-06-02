import {DISPLAY_PURCHASE_VIEW, SELECT_PRODUCT_OPTION_DETAILS, SET_PRODUCTS_DETAIL} from './shoppingViewActionTypes';
const shoppingViewInitialState={
   productDetails:'',
   selectedProductOptionDetails:'',
   productOptionView:false,
   purchaseView:false,
   purchaseViewData:''
  
}
const shoppingViewReducer=(state=shoppingViewInitialState, action)=>{
    switch (action.type){
        case SET_PRODUCTS_DETAIL:
            return{
                ...state,
                productDetails:action?.data,
                productOptionView:false,
                purchaseView:false
                
            };
            case SELECT_PRODUCT_OPTION_DETAILS:
                return{
                    ...state,
                    selectedProductOptionDetails:action?.data,
                    productOptionView:true,
                    purchaseView:false
                    
                };
                case DISPLAY_PURCHASE_VIEW:
                return{
                    ...state,
                    purchaseView:true,
                    purchaseViewData:action?.data,
                    
                };

                
            
             
            
            default:{
                return state;
            }
    }
}

export {shoppingViewInitialState, shoppingViewReducer};