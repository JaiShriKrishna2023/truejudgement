import React, { Fragment} from 'react';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';
import PurchaseView from './purchaseView';

const SelectedProductOptionView=(props)=>{
    console.log('shoppingView', props);
    let data={};


return(
    <Fragment>
        {props?.purchaseView  && props?.selectedProductOptionDetails.length >0
? <PurchaseView purchaseViewData={props?.purchaseViewData} {...props}/>: <CardWrapper>
        {props && Object.values(props).map((item, index)=>
        <Card key={index} title={item?.articleName} imgPath={item?.imagePath} onClick={()=>props?.handlePurchase(data={articleName:data.article=item?.articleName,
        imagePath:data.image=item?.imagePath,
        price:data.price=item?.price,
        colors:data.colors=item?.colorCode

        })}/>)}
</CardWrapper>}




    </Fragment>
)
}
export default SelectedProductOptionView;
