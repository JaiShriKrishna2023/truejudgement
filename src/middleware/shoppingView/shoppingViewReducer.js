import {SELECT_PRODUCT_OPTION_DETAILS, SET_PRODUCTS_DETAIL} from './shoppingViewActionTypes';
const shoppingViewInitialState={
   productDetails:'',
   selectedProductOptionDetails:''
  
}
const shoppingViewReducer=(state=shoppingViewInitialState, action)=>{
    switch (action.type){
        case SET_PRODUCTS_DETAIL:
            return{
                ...state,
                productDetails:action?.data
                
            };
            case SELECT_PRODUCT_OPTION_DETAILS:
                return{
                    ...state,
                    selectedProductOptionDetails:action?.data
                    
                };

            
             
            
            default:{
                return state;
            }
    }
}

export {shoppingViewInitialState, shoppingViewReducer};