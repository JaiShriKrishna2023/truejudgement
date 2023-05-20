import { takeLatest } from "redux-saga/effects";
import {productCategoryProcessor} from './productCategoryProcessor';
import {INITIATE_PRODUCT_CATEGORY_PROCESSOR} from './productCategoryActionTypes';

export const productCategoryWatcher=[
    takeLatest(INITIATE_PRODUCT_CATEGORY_PROCESSOR, productCategoryProcessor)
];
