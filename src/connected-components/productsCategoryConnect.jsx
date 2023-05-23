import {memo} from "react";
import ProductsCategory from "../components/productsCategory/productsCategory";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";
import { useDispatch, useSelector } from "react-redux";
import { setRightPanelScreenTypeAction } from "../middleware/rightPanel/rightPanelActionCreator";
import { RIGHT_PANEL_VIEW_SCREENS } from "../middleware/rightPanel/rightPanelActionTypes";
import { initiateProductCategoryProcessor } from "../middleware/productCategory/productCategoryActionCreator";


const ProductsCategoryConnect=()=>{
  const dispatch=useDispatch();

  const {selectedProduct, productOptions} =useSelector(selectRightPanelProps);
  const initiateDetailView=(selectedName)=>{
    console.log(selectedName);
    dispatch(initiateProductCategoryProcessor(selectedName));
   
    // dispatch(setRightPanelScreenTypeAction(RIGHT_PANEL_VIEW_SCREENS.DETAIL_PANEL_VIEW));

  }

    const ProductsCategoryProps={
        selectedProduct,
        productOptions,
        initiateDetailView
        
    }

    
    console.log('selectedProduct', selectedProduct);

        return <ProductsCategory {...ProductsCategoryProps}/>
      
      
    }
    
    export default memo(ProductsCategoryConnect);