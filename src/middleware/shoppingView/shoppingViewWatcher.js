import { takeLatest } from "redux-saga/effects";
import {GET_PRODUCTS_DATA} from './shoppingViewActionTypes';
import { initiateShoppingCartProcessor } from "./shoppingViewProcessor";

export const shoppingViewWatcher=[
    takeLatest(GET_PRODUCTS_DATA, initiateShoppingCartProcessor)
];