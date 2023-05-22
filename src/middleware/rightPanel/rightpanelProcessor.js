import {put, call, select, take} from 'redux-saga/effects';
import {productCategoryTask} from './rightPanelTask';


export function* rightPanelProcessor(){

    try{
        const {isSuccess, data}=yield call(productCategoryTask);
        if(isSuccess){
            // console.log(data);
        }else{
            console.log('no data')
        }

    }catch(error){
console.log('some api error');

    }

}