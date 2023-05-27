import React, { Fragment, useState } from 'react';
import { GlobalHeading, ImageContainer} from '../../globalStyle';






const ShoppingView=(props)=>{
    console.log('shoppingView', props);
    

return(
    <Fragment>
      <p>Please make payment here</p>
  <ImageContainer width={'200px'} height={'auto'} src={'./assets/images/qrCode.png'}/>

    </Fragment>
)
}
export default ShoppingView;
