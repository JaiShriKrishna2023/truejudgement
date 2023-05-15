import React, { useEffect, useState } from 'react'
import {PageTitle, RightPanelContainer} from './rightpanel.style';
import { GridContainer, GridItem } from '../globalStyle';
import Viewrouterconnect from '../connected-components/viewrouterconnect';
const RightPanelView = (props) => {

 
console.log('rightPanelView',props);
   
 return(
 <RightPanelContainer id={'rightpanel'}>
   <PageTitle>{props?.selectedProduct}</PageTitle>
  <GridContainer>
  <GridItem>
 
  <Viewrouterconnect/>
  </GridItem>
  
    </GridContainer>
    </RightPanelContainer>)
}
export default RightPanelView;