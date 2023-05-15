import React, {memo} from 'react';
import {compose} from 'redux';
import {useSelector} from 'react-redux';
import {ViewRouteMapper} from '../components/ViewRouteMapper';
import AppInitializationConnect from './appInitializationConnect';

const ViewRouterConnect=()=>{
    const viewType=useSelector(
        (state)=>state.appRouterReducer.viewScreenType
    );
    const component=ViewRouteMapper.find((x)=>x.id===viewType)?.component;
if(component){
    return component
}
return <div>sdsdfff</div>

}
export default compose(memo)(ViewRouterConnect);