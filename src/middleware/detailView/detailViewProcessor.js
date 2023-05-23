import {put} from 'redux-saga/effects';
import { RIGHT_PANEL_VIEW_SCREENS } from '../../constants/constants';
import { setViewScreenTypeAction } from '../actions/appRouterActionCreator';
import { setItemDetailData } from './detailViewActionCreator';


export function* detailViewProcessor(data){

   console.log('detail view processor', data);
   
   if(data !==undefined){
   yield put(setItemDetailData(data));
   yield put(setViewScreenTypeAction(RIGHT_PANEL_VIEW_SCREENS.DETAIL_PANEL_VIEW));


   }

}