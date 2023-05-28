import {memo} from "react";
import ProductsCategory from "../components/productsCategory/productsCategory";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";
import { useDispatch, useSelector } from "react-redux";

import { initiateProductCategoryProcessor } from "../middleware/productCategory/productCategoryActionCreator";
import {getProductsDataTypeAction} from '../middleware/shoppingView/shoppingViewActionCreator';


const ProductsCategoryConnect=()=>{
  const dispatch=useDispatch();

  const {selectedProduct, productOptions} =useSelector(selectRightPanelProps);
  const initiateDetailView=(event, selectedName)=>{
    console.log(selectedName);
    if(selectedName==='Shopping Mart'){
      dispatch(getProductsDataTypeAction(''));
    }else{
      dispatch(initiateProductCategoryProcessor(selectedName));
    }
    
 

  }

    const ProductsCategoryProps={
        selectedProduct,
        productOptions
       
        
    }

    
    console.log('selectedProduct', selectedProduct);

        return <ProductsCategory onClick={(event)=>initiateDetailView(event, selectedProduct)} {...ProductsCategoryProps}/>
      
      
    }
    
    export default memo(ProductsCategoryConnect);