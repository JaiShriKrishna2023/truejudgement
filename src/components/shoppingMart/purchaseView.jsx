import React, { Fragment} from 'react';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import { GlobalHeading } from '../../globalStyle';
import { capitalizeFirstLetter } from '../../utils/formatter';
import { Quantity, QuantityInput } from './shoppingCart.style';

const PurchaseView=(props)=>{
    console.log('purchaseView', props);

return(
    <Fragment>
    <GlobalHeading alignment={'left'}>{capitalizeFirstLetter(props?.purchaseViewData?.articleName)}</GlobalHeading>
    <hr></hr>
            
                        
<CardWrapper>
     <Card imgPath={props?.purchaseViewData?.imagePath} onClick={()=>void('')}/>
</CardWrapper>
<Quantity>
      <button class="plus-btn" type="button" name="button">
        <img src="plus.svg" alt="" />
      </button>
     <QuantityInput/>
      <button class="minus-btn" type="button" name="button">
        <img src="minus.svg" alt="" />
      </button>
    </Quantity>


    </Fragment>
)
}
export default PurchaseView;
