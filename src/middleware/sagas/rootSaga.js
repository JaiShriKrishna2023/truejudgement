import {all} from 'redux-saga/effects';
import { rightPanelWatcher } from '../rightPanel/rightPanelWatcher';
import { appInitializeWatcher } from '../appInitialization/appInitializeWatcher';
import { productCategoryWatcher } from '../productCategory/productCategoryWatcher';
export default function* rootSaga(){
yield all([
    // ...rightPanelWatcher,
    ...appInitializeWatcher,
    ...productCategoryWatcher
])
    
}