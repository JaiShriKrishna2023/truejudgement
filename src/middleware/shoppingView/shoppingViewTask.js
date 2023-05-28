import {call} from 'redux-saga/effects';
import {shoppingViewTransformer} from '../../transformers/shoppingViewTransformer';
import { getService } from '../../services/baseAPI';

export function* shoppingViewTask(){
    console.log('shoppingViewTask process');
    const serviceUrl='https://api.mocki.io/v2/c99bba7e/shoppingCart';

    const response =yield call(getService, serviceUrl);
    console.log('response',  response);
    if(response){
        const {isSuccess, data, error}=yield call(shoppingViewTransformer, response);

        console.log('data',  data);
        return{isSuccess, data, error}
    }
    
}