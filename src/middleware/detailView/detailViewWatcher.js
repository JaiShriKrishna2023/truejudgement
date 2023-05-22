import { takeLatest } from "redux-saga/effects";
import {rightPanelProcessor} from './rightpanelProcessor';
import {RIGHT_PANEL_VIEW_SCREENS} from './rightPanelActionTypes';

export const rightPanelWatcher=[
    takeLatest(RIGHT_PANEL_VIEW_SCREENS, rightPanelProcessor)
];