import React, { Fragment } from 'react';
import RightPanelConnect from '../connected-components/rightpanelconnect';
import SidebarConnect from '../connected-components/sidebarConnect';



const Container=(props)=>{

 console.log('container', props);

    return(
     <Fragment>
   <SidebarConnect sidebarData={props?.productProps?.products}/>
   <RightPanelConnect/>
</Fragment>

    
       
    
       
         
 )
}

export default Container;