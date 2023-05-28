import React, { Fragment, useState } from 'react';
import { GlobalHeading, ImageContainer} from '../../globalStyle';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';






const ShoppingView=(props)=>{
    console.log('shoppingView', props);
    

return(
    <Fragment>
<CardWrapper>
        {props?.productDetails && props?.productDetails?.map((item, index)=>
        <Card key={index} title={item?.name} imgPath={item?.imagePath}/>)}
</CardWrapper>

      <p>Please make payment here</p>
  <ImageContainer width={'200px'} height={'auto'} src={'./assets/images/qrCode.png'}/>

    </Fragment>
)
}
export default ShoppingView;
