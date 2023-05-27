import React, {memo,  useEffect} from 'react';
import Container from '../components/container';
import { useDispatch, useSelector } from 'react-redux';
import { getAppinitializeTypeAction } from '../middleware/appInitialization/appInitializeActionCreator';
import { selectAppInitialProps } from '../middleware/appInitialization/appInitializeSelector';
const AppInitializationConnect=(props)=>{
    console.log('+++++', props?.apiData);
const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAppinitializeTypeAction(true));
    },[]);

const {appInitialDataObj}=useSelector(selectAppInitialProps);
    return (<Container containerProps={props?.companyName} productProps={appInitialDataObj}/>)
}

export default memo(AppInitializationConnect);