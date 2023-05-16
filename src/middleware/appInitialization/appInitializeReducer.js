import { APP_INITIALIZE_DATA, SET_APP_INITIAL_DATA } from "./appInitializeActionTypes";

const appInitialState={
appInitialData:false,
appInitialDataObj:{}

}
const appInitializeReducer=(state=appInitialState, action)=>{
    switch (action.type){
        case APP_INITIALIZE_DATA:
            return{
                ...state,
                appInitialData:action.data
            };
            case SET_APP_INITIAL_DATA:
                return{
                    ...state,
                    appInitialDataObj:action.data
                };

            
            default:{
                return state;
            }
    }
}

export {appInitialState, appInitializeReducer};