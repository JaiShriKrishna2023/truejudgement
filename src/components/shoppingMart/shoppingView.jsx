import React, { Fragment} from 'react';
import {  ImageContainer} from '../../globalStyle';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import SelectedProductOptionView from './selectedProductOptionsView';


const ShoppingView=(props)=>{
    console.log('shoppingView', props);

return(
 <Fragment>
        {props?.selectedProductOptionDetails.length > 0 && props?.productOptionView ? <SelectedProductOptionView {...props?.selectedProductOptionDetails
} handlePurchase={props?.handlePurchase} {...props}/>:<Fragment><CardWrapper>
        {props?.productDetails && props?.productDetails?.map((item, index)=>
        <Card key={index} title={item?.name} imgPath={item?.imagePath} onClick={()=>props?.handleProductOption(item?.name)}/>)}

        
</CardWrapper>
      <p>Please make payment here</p>
  <ImageContainer width={'200px'} height={'auto'} src={'./assets/images/qrCode.png'}/></Fragment>}

  </Fragment>
   
)
}
export default ShoppingView;
