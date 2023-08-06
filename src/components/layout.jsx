import React, { memo, Fragment } from 'react';
import Viewrouterconnect from '../connected-components/viewrouterconnect';
import Header from './header';
import Footer from './footer';
import AppInitializationConnect from '../connected-components/appInitializationConnect';

const data=[1, 2,3 ,4];
const Layout=()=>{


    return(

      <AppInitializationConnect apiData={data} companyName={'lowes'}/>
  )

}
export default memo(Layout);