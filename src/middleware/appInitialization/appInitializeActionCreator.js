// import { APP_INITIALIZE_DATA } from "./appInitializeActionTypes";

import { APP_INITIALIZE_DATA, SET_APP_INITIAL_DATA } from "./appInitializeActionTypes";

export const getAppinitializeTypeAction=(data)=>({
    type:APP_INITIALIZE_DATA,
    data

});

export const setAppDataActionTypeAction=(data)=>({
    type:SET_APP_INITIAL_DATA,
    data

});

