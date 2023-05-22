import React, { Fragment } from 'react';
import Card from '../common-components/cards/cards';




const ProductsCategory=(props)=>{
    // console.log('productsCategory', props?.productOptions);

return(
    <Fragment>
        {props?.productOptions && props?.productOptions.map((description, index)=>
        <Card key={index} title={description?.name} imgPath={description?.imagePath}/>)}

    </Fragment>
)
}
export default ProductsCategory;
