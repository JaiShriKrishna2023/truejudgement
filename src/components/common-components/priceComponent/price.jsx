import React from 'react';
import styled from 'styled-components';

const PriceContainer = styled.div`
  display: inline-block;
  font-size: 16px;
`;

const CurrencySymbol = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

const PriceValue = styled.span`
  color: #333;
`;

const PriceComponent = ({ currency, value }) => {
  return (
    <PriceContainer>
      <CurrencySymbol>{currency}</CurrencySymbol>
      <PriceValue>{value}</PriceValue>
    </PriceContainer>
  );
};

export default PriceComponent;
