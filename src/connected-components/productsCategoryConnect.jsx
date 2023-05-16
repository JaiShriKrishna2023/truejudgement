import {memo} from "react";
import ProductsCategory from "../components/productsCategory/productsCategory";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";
import { useSelector } from "react-redux";


const ProductsCategoryConnect=()=>{

  const {selectedProduct} =useSelector(selectRightPanelProps);
    const ProductsCategoryProps={
        selectedProduct
        
    }

    console.log('selectedProduct', selectedProduct);

        return <ProductsCategory {...ProductsCategoryProps}/>
      
      
    }
    
    export default memo(ProductsCategoryConnect);