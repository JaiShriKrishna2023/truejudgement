import styled from "styled-components";

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  background-color: #07afd5;
`;



const QuantityDisplay = styled.span`
  font-size: 14px;
  color: #333;
`;
 

  export {QuantitySelector, QuantityDisplay}