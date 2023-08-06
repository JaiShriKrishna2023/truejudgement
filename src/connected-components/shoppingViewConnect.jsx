import {memo, useCallback, useEffect, useRef, useState} from "react";
import ShoppingView from "../components/shoppingMart/shoppingView";
import { useDispatch, useSelector } from "react-redux";
import { displayPurchaseView, getProductsDataTypeAction, selectProductOptionDetails, setQuantitySelection } from "../middleware/shoppingView/shoppingViewActionCreator";
import { selectShoppingViewProps } from "../middleware/shoppingView/shoppingViewSelector";



const ShoppingViewConnect=()=>{
    const [quantity, setQuantity] = useState(0);
    const[itemCount, updateCount]=useState(0);
    let purchaseViewDataDetails={};
   
   

const dispatch=useDispatch();

useEffect(()=>{
    getProductData();
}, []);

const getProductData=()=>{
    return  dispatch(getProductsDataTypeAction())
}

const {productDetails, selectedProductOptionDetails, productOptionView, 
  purchaseViewData, purchaseView, selectedQuantity,selectedPurchaseItem}=useSelector(selectShoppingViewProps);


const handleProductOption=(selectedOption)=>{
    console.log('+++++', selectedOption);
 productDetails?.map((item)=>item?.name===selectedOption ? dispatch(selectProductOptionDetails(item?.productDetails)):'');

}
const handlePurchase=(itemSelection)=>{
 purchaseViewDataDetails = selectedProductOptionDetails.filter(item => {
  return item?.articleId===itemSelection?.articleId;
});
const data={
  purchaseViewDataDetails:purchaseViewDataDetails[0].subProducts,
  itemSelection:itemSelection
}
dispatch(displayPurchaseView(data));
}

const handleIncrease = (event)=>{
  console.log(event?.currentTarget);
 console.log(purchaseViewData);
  setQuantity(quantity + 1);
 
  
};
 
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleColorSelect=()=>{
    
  }
  let ElementRef = useRef(null);
  const handleAddToCart=()=>{
    console.log('add to cart');
    let Elementcount = ElementRef.current.childNodes.length
        console.log(Elementcount);
  }
  const handleCartClick = () => {
    console.log('cart click');
    // Logic for handling cart icon click
  };

  

const shoppingProps={
    handleProductOption,
    handlePurchase,
    productDetails, 
    selectedProductOptionDetails,
    productOptionView,
    purchaseView,
    purchaseViewData,
    quantity:quantity,
    onIncrease:handleIncrease,
    onDecrease:handleDecrease,
    onSelect:handleColorSelect,
    purchaseViewDataDetails:purchaseViewDataDetails,
    handleAddToCart,
    handleCartClick,
    itemCount,
    ElementRef,
    selectedPurchaseItem
    
 
}


        return <ShoppingView {...shoppingProps}/>
      
    }
    
    export default memo(ShoppingViewConnect);