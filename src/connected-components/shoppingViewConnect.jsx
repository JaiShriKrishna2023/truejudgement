import {memo, useEffect, useState} from "react";
import ShoppingView from "../components/shoppingMart/shoppingView";
import { useDispatch, useSelector } from "react-redux";
import { displayPurchaseView, getProductsDataTypeAction, selectProductOptionDetails, setQuantitySelection } from "../middleware/shoppingView/shoppingViewActionCreator";
import { selectShoppingViewProps } from "../middleware/shoppingView/shoppingViewSelector";



const ShoppingViewConnect=()=>{
    const [quantity, setQuantity] = useState(1);
   

const dispatch=useDispatch();

useEffect(()=>{
    getProductData();
}, []);

const getProductData=()=>{
    return  dispatch(getProductsDataTypeAction())
}
const {productDetails, selectedProductOptionDetails,
     productOptionView, purchaseViewData, purchaseView, selectedQuantity}=useSelector(selectShoppingViewProps);

console.log(productDetails)

const handleProductOption=(selectedOption)=>{
    console.log('+++++', selectedOption);
    
 productDetails?.map((item)=>item?.name===selectedOption ? dispatch(selectProductOptionDetails(item?.productDetails)):'');
}
const handlePurchase=(itemSelection)=>{
console.log(itemSelection);
dispatch(displayPurchaseView(itemSelection))
}
const handleIncrease = () => {
    selectedProductOptionDetails?.map((item)=>

    item?.quantity > quantity ? setQuantity(quantity + 1):void(''));
    dispatch(setQuantitySelection(quantity));
   
    
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleColorSelect=()=>{
    
  }

const shoppingProps={
    handleProductOption,
    handlePurchase,
    productDetails, 
    selectedProductOptionDetails,
    productOptionView,
    purchaseView,
    purchaseViewData,
    quantity:quantity || selectedQuantity,
    onIncrease:handleIncrease,
    onDecrease:handleDecrease,
    onSelect:handleColorSelect
    
 
}


        return <ShoppingView {...shoppingProps}/>
      
    }
    
    export default memo(ShoppingViewConnect);