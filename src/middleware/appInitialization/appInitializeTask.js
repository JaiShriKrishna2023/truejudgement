import {call} from 'redux-saga/effects';
import {appInitializeTransformer} from '../../transformers/appInitializeTransformer';
import { getService } from '../../services/baseAPI';

export function* appInitializeTask(){
    // console.log('appInitializeTask');
    const serviceUrl='https://api.mocki.io/v2/c99bba7e/appData';

    const response =yield call(getService, serviceUrl);
    // console.log('response',  response);
    if(response){
        const {isSuccess, data, error}=yield call(appInitializeTransformer, response);

        // console.log('data',  data);
        return{isSuccess, data, error}
    }
    

    

}