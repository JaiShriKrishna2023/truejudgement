

import React, { Fragment } from 'react';
import { Button } from '../../../globalStyle';
import { QuantityDisplay, QuantitySelector } from '../../shoppingMart/shoppingCart.style';



const QuantitySelection = ({ onDecrease, onIncrease , quantity, totalQty}) => {
  return (
    <Fragment>
    <QuantitySelector>
    <Button onClick={onDecrease}>-</Button>
    <QuantityDisplay totalQty={totalQty}>{quantity}</QuantityDisplay>
    <Button onClick={onIncrease}>+</Button>
    </QuantitySelector>
     <QuantityDisplay/>
     </Fragment>
  );
};

export default QuantitySelection;

