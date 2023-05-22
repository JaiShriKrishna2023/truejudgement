import {call, put} from 'redux-saga/effects';
import {appInitializeTask} from './appInitializeTask';
import {setAppDataActionTypeAction } from './appInitializeActionCreator';


export function* appInitializeProcessor(){

    try{
        const {isSuccess, data}=yield call(appInitializeTask);
        if(isSuccess){
            console.log('processor',data);
            yield put(setAppDataActionTypeAction(data));
            return;
            
        }else{
            console.log('no data')
        }

    }catch(error){
console.log('some api error');

    }

}

