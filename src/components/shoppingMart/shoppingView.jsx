import React, { Fragment} from 'react';
import {  ImageContainer} from '../../globalStyle';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import SelectedProductOptionView from './selectedProductOptionsView';
import BillApilt from '../billAmount/billAmount';
import ProductComponent from '../productList/productList';
import TestComp from '../test';


const ShoppingView=(props)=>{
    console.log('shoppingView', props);

return(
 <Fragment>

<p>Test Component</p>

<TestComp/>


<BillApilt></BillApilt>

<ProductComponent/>
<br/>
<br/><br/><br/><br/>

        {props?.selectedProductOptionDetails.length > 0 && props?.productOptionView ? <SelectedProductOptionView {...props?.selectedProductOptionDetails
} handlePurchase={props?.handlePurchase} {...props}/>:<Fragment><CardWrapper>
        {props?.productDetails && props?.productDetails?.map((item, index)=>
        <Card key={index} title={item?.name} imgPath={item?.imagePath} onClick={()=>props?.handleProductOption(item?.name)}/>)}
</CardWrapper>
</Fragment>}

  </Fragment>
   
)
}
export default ShoppingView;
