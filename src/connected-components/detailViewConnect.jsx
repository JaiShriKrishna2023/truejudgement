import {memo} from "react";

import { selectDetailViewProps } from "../middleware/detailView/detailViewSelector";
import { useSelector } from "react-redux";
import DetailView from "../components/detailedView/detailview";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";


const DetailViewConnect=()=>{
console.log('detail view connect');

  const {productOptions} =useSelector(selectRightPanelProps);


  const {selectedName } =useSelector(selectDetailViewProps);
    const DetailItemProps={
        selectedName,
        productOptions
        
       }

    // console.log('selectedProduct', selectedItem);

        return <DetailView {...DetailItemProps}/>
      
      
    }
    
    export default memo(DetailViewConnect);