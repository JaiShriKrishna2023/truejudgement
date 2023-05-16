import { takeLatest } from "redux-saga/effects";
import {appInitializeProcessor} from './appInitializeProcessor';
import {APP_INITIALIZE_DATA, SET_APP_INITIAL_DATA} from './appInitializeActionTypes';

export const appInitializeWatcher=[
    takeLatest(APP_INITIALIZE_DATA, appInitializeProcessor)
    // takeLatest(SET_APP_INITIAL_DATA, appInitializeProcessor)

    
];