import React, { memo, Fragment } from 'react';
import Viewrouterconnect from '../connected-components/viewrouterconnect';
import Header from './header';
import Footer from './footer';
import AppInitializationConnect from '../connected-components/appInitializationConnect';

const Layout=()=>{
    return(
      <AppInitializationConnect/>
  )

}
export default memo(Layout);