import {memo} from "react";

import { selectDetailViewProps } from "../middleware/detailView/detailViewSelector";
import { useDispatch, useSelector } from "react-redux";
import DetailView from "../components/detailedView/detailview";
import { selectRightPanelProps } from "../middleware/rightPanel/rightPanelSelector";


const DetailViewConnect=()=>{
console.log('detail view connect');
const dispatch=useDispatch();
  const {productOptions} =useSelector(selectRightPanelProps);
  const {selectedName } =useSelector(selectDetailViewProps);
    const DetailItemProps={
        selectedName,
        productOptions
        
       }

  console.log('selectedProduct', selectedName);

  if(selectedName==='Anika Shopping Mart'){
    dispatch(initiateShoppingMartTypeAction())
  }

        return <DetailView {...DetailItemProps}/>
      
      
    }
    
    export default memo(DetailViewConnect);