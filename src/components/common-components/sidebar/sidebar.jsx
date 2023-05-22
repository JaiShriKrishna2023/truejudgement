import React from 'react';
import{SidebarContainer, SidebarList, SidebarNav, SidebarListItem} from './sidebar.style';


const Sidebar=(props)=>{

return(
<SidebarNav id={'sidebar'}>
    {props?.sidebarData && props?.sidebarData.map((itemData, index) => <SidebarListItem  key={index}
          onClick={() => props?.handleMenuSelection(itemData?.id, itemData?.productName)}
          className={itemData.id === props?.activeItem ? "activeProduct" : ""}>
              {itemData.productName}
          </SidebarListItem>)}
      
  </SidebarNav>





)
}
export default Sidebar;
