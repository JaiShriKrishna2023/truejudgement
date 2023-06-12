import React, { Fragment} from 'react';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import {Column, GlobalHeading, GridContainer, Row} from '../../globalStyle';
import { capitalizeFirstLetter } from '../../utils/formatter';
import PriceComponent from '../common-components/priceComponent/price';
import QuantitySelection from '../common-components/QuantitySelector/quantitySelector';
import ColorSelection from '../common-components/colorSelection/colorSelection';
import AddToCart from './addToCart';
import CartIcon from '../common-components/cart/cart';
import { PurchaseWrapper, Wrapper } from './shoppingCart.style';
import Chatbot from '../chatbot/chatgpt';

const PurchaseView=(props)=>{
    console.log('purchaseView', props);
   
    

return(
    <Fragment>
       
       <PurchaseWrapper data-name={'purchase-wrapper'}>
<GridContainer>
    <Row>
    <Column>
        <GlobalHeading alignment={'left'}>{capitalizeFirstLetter(props?.selectedPurchaseItem)}</GlobalHeading>
        </Column>
        <Column>
        <CartIcon imageUrl="./assets/images/cart.png" itemCount={props?.itemCount} onClick={props?.handleCartClick} />
        </Column>
       
    </Row>
</GridContainer>
<hr></hr>
   <AddToCart onClick={props?.handleAddToCart} align={'right'} />
  {props?.purchaseViewData.length > 0 && props?.purchaseViewData?.map((item, index)=>
    <Fragment>
       <Wrapper data-id={`wrapper-${index+1}`} data-quantity={item?.quantity}  ref={props?.ElementRef}>
        <CardWrapper>
          <Card title={item?.articleName} imgPath={item?.imagePath} onClick={()=>void('')}/>
      </CardWrapper>
<PriceComponent currency="INR" value={item?.price} />
<QuantitySelection quantity={props?.quantity} onIncrease={props?.onIncrease} onDecrease={props?.onDecrease}/>
<ColorSelection colors={item?.colorCode} onSelect={props?.handleColorSelect} />
 </Wrapper>
 </Fragment>
 )}
</PurchaseWrapper> 
</Fragment>


)
}


export default PurchaseView;
