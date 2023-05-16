import { combineReducers } from "redux";
import { appRouterInitialState, appRouterReducer } from "./appRouterReducer";
import { appInitialState, appInitializeReducer } from "../../appInitialization/appInitializeReducer";
import { rightPanelInitialState, rightPanelReducer } from "../../rightPanel/rightPanelReducer";

const initialState={
appRouterReducer:appRouterInitialState,
appInitializeReducer:appInitialState,
rightPanelReducer:rightPanelInitialState
};
const rootReducer=(state, action)=>{
return appReducer(state, action);

}

export const appReducer=combineReducers({
    appRouterReducer,
    appInitializeReducer,
    rightPanelReducer
})

export {rootReducer, initialState}