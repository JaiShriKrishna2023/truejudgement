import {memo} from "react";

import { selectDetailViewProps } from "../middleware/detailView/detailViewSelector";
import { useSelector } from "react-redux";
import DetailView from "../components/detailedView/detailview";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";


const DetailViewConnect=()=>{


  const { selectedProduct, productOptions} =useSelector(selectRightPanelProps);


  const {itemDetails } =useSelector(selectDetailViewProps);
    const DetailItemProps={
        selectedItem:selectedProduct,
        itemDetails,
        productOptions
        
       }

    // console.log('selectedProduct', selectedItem);

        return <DetailView {...DetailItemProps}/>
      
      
    }
    
    export default memo(DetailViewConnect);