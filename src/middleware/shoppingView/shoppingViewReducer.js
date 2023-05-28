import {SET_PRODUCTS_DETAIL} from './shoppingViewActionTypes';
const shoppingViewInitialState={
   productDetails:''
  
}
const shoppingViewReducer=(state=shoppingViewInitialState, action)=>{
    switch (action.type){
        case SET_PRODUCTS_DETAIL:
            return{
                ...state,
                productDetails:action?.data
               
                
            };
             
            
            default:{
                return state;
            }
    }
}

export {shoppingViewInitialState, shoppingViewReducer};