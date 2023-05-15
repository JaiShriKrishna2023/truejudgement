import React, { useState } from "react";
import {
  ItemsList,
  ItemContainer
} from "./sidebar.style";
import './sidebar.style.css'

const SidebarItems = (props) => {
  console.log('sidebarProps', props);
  return (
    <ItemContainer>
      {props?.sidebarData && props?.sidebarData.map((itemData, index) => (
        
        <ItemsList
          key={index}
          onClick={() => props?.handleMenuSelection(itemData?.id, itemData?.productName)}
          className={itemData.id === props?.activeItem ? "activeProduct" : ""}
        >
         {itemData.productName}
        </ItemsList>
      ))}
    </ItemContainer>
  );
};

export default SidebarItems;