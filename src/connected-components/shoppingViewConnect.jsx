import {memo, useEffect} from "react";
import ShoppingView from "../components/shoppingMart/shoppingView";
import { useDispatch, useSelector } from "react-redux";
import { displayPurchaseView, getProductsDataTypeAction, selectProductOptionDetails } from "../middleware/shoppingView/shoppingViewActionCreator";
import { selectShoppingViewProps } from "../middleware/shoppingView/shoppingViewSelector";



const ShoppingViewConnect=()=>{

const dispatch=useDispatch();

useEffect(()=>{
    getProductData();
}, []);

const getProductData=()=>{
    return  dispatch(getProductsDataTypeAction())
}
const {productDetails, selectedProductOptionDetails,
     productOptionView, purchaseViewData, purchaseView}=useSelector(selectShoppingViewProps);

console.log(productDetails)

const handleProductOption=(selectedOption)=>{
 productDetails?.map((item)=>item?.name===selectedOption ? dispatch(selectProductOptionDetails(item?.productDetails)):'');
}
const handlePurchase=(itemSelection)=>{
console.log(itemSelection);

dispatch(displayPurchaseView(itemSelection))
}


const shoppingProps={
    handleProductOption,
    handlePurchase,
    productDetails, 
    selectedProductOptionDetails,
    productOptionView,
    purchaseView,
    purchaseViewData
}


        return <ShoppingView {...shoppingProps}/>
      
    }
    
    export default memo(ShoppingViewConnect);