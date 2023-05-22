import {call} from 'redux-saga/effects';
import {rightPanelTransformer} from '../../transformers/rightPanelTransformer';
import { getService } from '../../services/baseAPI';

export function* productCategoryTask(){
    // console.log('productCategoryTask');
    const serviceUrl='https://jsonplaceholder.typicode.com/posts';

    const response =yield call(getService, serviceUrl);
    // console.log('response',  response);
    if(response){
        const {isSuccess, data, error}=yield call(rightPanelTransformer, response);

        // console.log('data',  data);
        return{isSuccess, data, error}
    }
    

    

}