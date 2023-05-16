import React, { Fragment } from 'react';
import Card from '../common-components/cards/cards';




const ProductsCategory=(props)=>{
    console.log('productsCategory', props);

return(
    <Fragment>
        {props?.productOptions.map((description, index)=><Card key={index} title={props?.selectedProduct} description={description}/>)}

    </Fragment>
)
}
export default ProductsCategory;
