import React, { Fragment} from 'react';
import { CardWrapper } from '../common-components/cards/card.style';
import Card from '../common-components/cards/cards';

const SelectedProductOptionView=(props)=>{
    console.log('shoppingView', props);

return(
    <Fragment>
<CardWrapper>
        {props && Object.values(props).map((item, index)=>
        <Card key={index} title={item?.articleName} imgPath={item?.imagePath} onClick={()=>void('')}/>)}
</CardWrapper>



    </Fragment>
)
}
export default SelectedProductOptionView;
