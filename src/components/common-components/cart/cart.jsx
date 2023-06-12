import React from 'react';
import styled from 'styled-components';

const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartIconImage = styled.img`
  width: 40px;
  height: 40px;
`;

const ItemCountBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

const CartIcon = ({ imageUrl, itemCount }) => {
  console.log(itemCount);
  return (
    <CartIconWrapper>
      <CartIconImage src={imageUrl} alt="Cart" />
      {itemCount > 0 && <ItemCountBadge>{itemCount}</ItemCountBadge>}
    </CartIconWrapper>
  );
};

export default CartIcon;
