import {put} from 'redux-saga/effects';
import { RIGHT_PANEL_VIEW_SCREENS } from '../../constants/constants';
import { setViewScreenTypeAction } from '../actions/appRouterActionCreator';
import { setItemDetailData } from './detailViewActionCreator';


export function* detailViewProcessor(props){

   // console.log('detail view processor', props);
   if(props !==undefined){
   yield put(setItemDetailData(props));
   yield put(setViewScreenTypeAction(RIGHT_PANEL_VIEW_SCREENS.DETAIL_PANEL_VIEW));


   }

}