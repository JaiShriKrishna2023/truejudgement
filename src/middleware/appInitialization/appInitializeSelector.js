import {createSelector} from 'reselect';
import { appInitialState} from './appInitializeReducer';

export const selectAppInitialDomain=state=> state.appInitializeReducer || appInitialState;


export const selectAppInitialProps=createSelector(
    selectAppInitialDomain,({
        appInitialDataObj

    })=>({
        appInitialDataObj
    })

)