import {memo, useEffect} from "react";
import ShoppingView from "../components/shoppingMart/shoppingView";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDataTypeAction } from "../middleware/shoppingView/shoppingViewActionCreator";
import { selectShoppingViewProps } from "../middleware/shoppingView/shoppingViewSelector";


const ShoppingViewConnect=()=>{

const dispatch=useDispatch();

useEffect(()=>{
    getProductData();
}, []);

const getProductData=()=>{
    return  dispatch(getProductsDataTypeAction())
}
const {productDetails}=useSelector(selectShoppingViewProps);

console.log(productDetails)


        return <ShoppingView productDetails={productDetails}/>
      
    }
    
    export default memo(ShoppingViewConnect);