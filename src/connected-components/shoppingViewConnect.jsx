import {memo, useEffect} from "react";
import ShoppingView from "../components/shoppingMart/shoppingView";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDataTypeAction, selectProductOptionDetails } from "../middleware/shoppingView/shoppingViewActionCreator";
import { selectShoppingViewProps } from "../middleware/shoppingView/shoppingViewSelector";



const ShoppingViewConnect=()=>{

const dispatch=useDispatch();

useEffect(()=>{
    getProductData();
}, []);

const getProductData=()=>{
    return  dispatch(getProductsDataTypeAction())
}
const {productDetails, selectedProductOptionDetails}=useSelector(selectShoppingViewProps);

console.log(productDetails)

const handleProductOption=(selectedOption)=>{
   
 productDetails?.map((item)=>item?.name===selectedOption ? dispatch(selectProductOptionDetails(item?.productDetails)):'');


}
const shoppingProps={
    handleProductOption,
    productDetails, 
    selectedProductOptionDetails
}


        return <ShoppingView {...shoppingProps}/>
      
    }
    
    export default memo(ShoppingViewConnect);