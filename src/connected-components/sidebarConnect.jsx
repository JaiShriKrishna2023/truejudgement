import { memo, useState } from "react";
import Sidebar from "../components/common-components/sidebar/sidebar";
import { useDispatch } from "react-redux";
import { RIGHT_PANEL_VIEW_SCREENS } from "../constants/constants";
import { setViewScreenTypeAction } from "../middleware/actions/appRouterActionCreator";
import { setSelectedProductTypeAction } from "../middleware/rightPanel/rightPanelActionCreator";


const SideBarConnect=(props)=>{
    console.log('sidebarConnect', props);
    const dispatch=useDispatch();

    const [activeItem, setActiveItem] = useState(0);
  const handleMenuSelection=(id, selectedItem)=>{
    setActiveItem(id);
    dispatch(setSelectedProductTypeAction(
        {
        selectedItem:selectedItem,
        productOptions:props?.sidebarData[id-1]?.productOptions
        }
        ));
    dispatch(setViewScreenTypeAction(RIGHT_PANEL_VIEW_SCREENS.PRODUCT_CATEGORY_VIEW));

     }
    
    const sidebarProps={
        sidebarData:props?.sidebarData,
        activeItem,
        handleMenuSelection,
        setActiveItem

    }

        return (<Sidebar {...sidebarProps}/>)
    }
    
    export default memo(SideBarConnect);