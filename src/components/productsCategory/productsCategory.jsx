import React, { Fragment } from 'react';
import Card from '../common-components/cards/cards';




const ProductsCategory=(props)=>{
    console.log('productsCategory', props?.selectedProduct);

return(
    <Fragment>
<Card title={props?.selectedProduct} description={'soupy maggi'}/>
    </Fragment>
)
}
export default ProductsCategory;
