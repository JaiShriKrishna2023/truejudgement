import { combineReducers } from "redux";
import { appRouterInitialState, appRouterReducer } from "./appRouterReducer";
import { appInitialState, appInitializeReducer } from "../../appInitialization/appInitializeReducer";
import { rightPanelInitialState, rightPanelReducer } from "../../rightPanel/rightPanelReducer";
import { detailViewInitialState, detailViewReducer } from "../../detailView/detailViewReducer";

const initialState={
appRouterReducer:appRouterInitialState,
appInitializeReducer:appInitialState,
rightPanelReducer:rightPanelInitialState,
detailViewReducer:detailViewInitialState
};
const rootReducer=(state, action)=>{
return appReducer(state, action);

}

export const appReducer=combineReducers({
    appRouterReducer,
    appInitializeReducer,
    rightPanelReducer,
    detailViewReducer
})

export {rootReducer, initialState}