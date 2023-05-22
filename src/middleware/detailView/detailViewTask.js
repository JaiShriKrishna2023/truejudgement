import {call} from 'redux-saga/effects';
import {detailViewTransformer} from '../../transformers/detailViewTransformer';
import { getService } from '../../services/baseAPI';

export function* detailViewTask(){
    console.log('detailViewTask process');
    const serviceUrl='https://api.mocki.io/v2/c99bba7e/itemDetails';

    const response =yield call(getService, serviceUrl);
    // console.log('response',  response);
    if(response){
        const {isSuccess, data, error}=yield call(detailViewTransformer, response);

        console.log('data',  data);
        return{isSuccess, data, error}
    }
    

    

}