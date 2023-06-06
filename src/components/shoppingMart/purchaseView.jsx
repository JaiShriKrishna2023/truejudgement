import React, { Fragment} from 'react';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import {GlobalHeading} from '../../globalStyle';
import { capitalizeFirstLetter } from '../../utils/formatter';
import PriceComponent from '../common-components/priceComponent/price';
import QuantitySelection from '../common-components/QuantitySelector/quantitySelector';
import ColorSelection from '../common-components/colorSelection/colorSelection';

const PurchaseView=(props)=>{
    console.log('purchaseView', props);

return(
    <Fragment>
    <GlobalHeading alignment={'left'}>{capitalizeFirstLetter(props?.purchaseViewData?.articleName)}</GlobalHeading>
    <hr></hr>
<CardWrapper>
     <Card imgPath={props?.purchaseViewData?.imagePath} onClick={()=>void('')}/>
</CardWrapper>
<PriceComponent currency="INR" value={props?.purchaseViewData?.price} />
<QuantitySelection quantity={props?.quantity} onIncrease={props?.onIncrease} onDecrease={props?.onDecrease}/>
<ColorSelection colors={props?.purchaseViewData?.colors} onSelect={props?.handleColorSelect} />
 </Fragment>
)
}
export default PurchaseView;
