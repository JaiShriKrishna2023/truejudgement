import {memo} from "react";
import ProductsCategory from "../components/productsCategory/productsCategory";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";
import { useSelector } from "react-redux";


const ProductsCategoryConnect=()=>{

  const {selectedProduct, productOptions} =useSelector(selectRightPanelProps);
    const ProductsCategoryProps={
        selectedProduct,
        productOptions
        
    }

    console.log('selectedProduct', selectedProduct);

        return <ProductsCategory {...ProductsCategoryProps}/>
      
      
    }
    
    export default memo(ProductsCategoryConnect);