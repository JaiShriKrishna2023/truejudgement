import React, { memo, Fragment } from 'react';
import Viewrouterconnect from '../connected-components/viewrouterconnect';
import Header from './header';
import Footer from './footer';
import AppInitializationConnect from '../connected-components/appInitializationConnect';

const Layout=()=>{
    return(
        <Fragment>
<Header/>
<AppInitializationConnect/>

<Footer/>
        </Fragment>
  )

}
export default memo(Layout);