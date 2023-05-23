import {call} from 'redux-saga/effects';
import { detailViewTask } from '../detailView/detailViewTask';
import { detailViewProcessor } from '../detailView/detailViewProcessor';


export function* productCategoryProcessor(selectedName){

    // console.log('productCategoryProcessor');

    try{
        const {isSuccess, data}=yield call(detailViewTask);
        if(isSuccess){
            // console.log('detail view api',data);
            data.selectedName=selectedName;
    yield call(detailViewProcessor, data);
  
            return;
            
        }else{
            console.log('no data')
        }

    }catch(error){
console.log('some api error');

    }


   
   return true;

}

