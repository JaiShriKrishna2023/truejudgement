import { SET_RIGHT_PANEL_SCREEN_TYPE, SET_SELECTED_PRODUCTS } from './rightPanelActionTypes';
const rightPanelInitialState={
    previousRightPanelType:'',
    rightPanelType:'',
    selectedProduct:'',
    productOptions:{}

}
const rightPanelReducer=(state=rightPanelInitialState, action)=>{
    switch (action.type){
        case SET_RIGHT_PANEL_SCREEN_TYPE:
            return{
                ...state,
                previousRightPanelType:state.rightPanelType,
                rightPanelType:action.data
                
            };
            case SET_SELECTED_PRODUCTS:
                return{
                    ...state,
                    selectedProduct:action?.data?.selectedItem,
                    productOptions:action?.data?.productOptions
                    
                };

            
            default:{
                return state;
            }
    }
}

export {rightPanelInitialState, rightPanelReducer};