import {put, call} from 'redux-saga/effects';
import { shoppingViewTask } from './shoppingViewTask';
import { setProductsDataTypeAction } from './shoppingViewActionCreator';
import { setViewScreenTypeAction } from '../actions/appRouterActionCreator';
import { RIGHT_PANEL_VIEW_SCREENS } from '../../constants/constants';


export function* initiateShoppingCartProcessor(){

   console.log('initiate shopping cart processor ');
   try{
      const {isSuccess, data}=yield call(shoppingViewTask);
      if(isSuccess){
          console.log('shopping product data', data);
          yield call(setShoppingCartDataProcessor, data);
          return true;
      }else{
          console.log('no data')
      }

  }catch(error){
console.log('some api error');

  }
}

export function* setShoppingCartDataProcessor(data){

  console.log('setShoppingCartDataProcessor', data);
if(data.length > 0){
  yield put(setProductsDataTypeAction(data));
  yield put(setViewScreenTypeAction(RIGHT_PANEL_VIEW_SCREENS.SHOPPING_VIEW));
  
}

 }
