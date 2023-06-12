import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  ${props => props.align === 'left' && css`
    float: left;
  `}
  ${props => props.align === 'right' && css`
  float: right;
`}

  @media (max-width: 768px) {
    ${props => props.align === 'left' && css`
      float: none;
    `}
  }
`;

const AddToCart = ({ onClick, align }) => {
  return <Button onClick={onClick} align={align}>Add to Cart</Button>;
};

export default AddToCart;
