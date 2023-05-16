import React, { Fragment } from 'react';
import RightPanelConnect from '../connected-components/rightpanelconnect';
import SidebarConnect from '../connected-components/sidebarConnect';
import Viewrouterconnect from '../connected-components/viewrouterconnect';


const Container=(props)=>{

 console.log('container', props);

    return(<Fragment>
        {console.log(props)}
        <SidebarConnect sidebarData={props?.productProps?.products}/>
     <RightPanelConnect/>
       
         
      </Fragment>)
}

export default Container;