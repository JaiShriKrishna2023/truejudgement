import React, { Fragment } from 'react';
import Card from '../common-components/cards/cards';
import { CardWrapper } from '../common-components/cards/card.style';




const ProductsCategory=(props)=>{
    console.log('productsCategory', props?.productOptions);

return( <CardWrapper>
        {props?.productOptions && props?.productOptions.map((description, index)=>
        <Card key={index} title={description?.name} imgPath={description?.imagePath} initiateDetailView={props?.initiateDetailView}/>)}
</CardWrapper>
  
)
}
export default ProductsCategory;
