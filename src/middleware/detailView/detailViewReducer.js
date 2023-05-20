import {SELECTED_ITEM_DETAIL, SET_ITEM_DETAIL_DATA} from './detailViewActionTypes';
const detailViewInitialState={
   
    selectedItem:'',
    itemDetails:''

}
const detailViewReducer=(state=detailViewInitialState, action)=>{
    switch (action.type){
        case SELECTED_ITEM_DETAIL:
            return{
                ...state,
                selectedItem:action.data
                
            };
                case SET_ITEM_DETAIL_DATA:
                    return{
                        ...state,
                        itemDetails:action.data,
                        
                        
                    };
            
            default:{
                return state;
            }
    }
}

export {detailViewInitialState, detailViewReducer};