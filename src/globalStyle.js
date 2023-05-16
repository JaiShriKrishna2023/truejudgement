import styled from 'styled-components';

const GridContainer=styled.div` 
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-top: 0%;
    margin-left: 0%;
    background-color: #cccccc47;
  `;

  const GridItem=styled.div` 
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid transparent;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    width: 200px;
    height: auto;
  `;

  

  export {GridContainer, GridItem}