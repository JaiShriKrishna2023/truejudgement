import styled from "styled-components";

const Quantity=styled.div`

    padding-top: 20px;
    margin-right: 60px;`;

  
  const QuantityInput=styled.input`
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
  
  `;


 const QuantityButton=styled.button`
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  `;
//   .minus-btn img {
//     margin-bottom: 3px;
//   }
//   .plus-btn img {
//     margin-top: 2px;
//   }
   
 

  export {Quantity, QuantityInput}