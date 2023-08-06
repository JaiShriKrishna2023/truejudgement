import React, { useEffect, useState } from 'react'
import {PageTitle, RightPanelContainer} from './rightpanel.style';
import { GridContainer, GridItem } from '../globalStyle';
import Viewrouterconnect from '../connected-components/viewrouterconnect';
const RightPanelView = (props) => {

   
 return(
 <RightPanelContainer id={'rightpanel'} className={'content'}>
   <PageTitle>{props?.selectedProduct}</PageTitle>
   
  <Viewrouterconnect/>
    </RightPanelContainer>)
}
export default RightPanelView;