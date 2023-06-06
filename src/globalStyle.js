import styled from 'styled-components';

const Row=styled.div`
&.row::after{
  content: "";
  clear: both;
  display: table;

}

`;


const GridContainer=styled.div` 
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-top: 0%;
    margin-left: 0%;
    background-color: rgb(15 155 197 / 28%);
  `;

  const GridItem=styled.div` 
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid transparent;
  font-size: 30px;
  text-align: center;
  width: 100%;
  height: auto;
  max-width: 100%;
  display: flex;
  overflow: scroll;
  `;

  const GlobalHeading=styled.div`
  font-family: "Segoe UI", Arial, sans-serif;
  font-weight: 400;
  margin: 10px 0px;
  text-align: ${props => props.alignment};
  font-weight: bold;
  color: #672;
  font-size: 2rem;
  `;

  const Image=styled.img`
  max-width: 100%;
  width:auto;
  height:130px;
  `

const Acnhor=styled.a`

`;

  const Description=styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  `;

  const ImageContainer=styled.img`
  width: ${props => props.width};
  height: ${props => props.height}
  object-fit: none;
  src: ${props => props.img};
  `;

  const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

const ClearFix=styled.div`{
 :after {
    content: "";
    display: table;
    clear: both;
  }

}`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

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

  

  export {
    Row,Acnhor, GridContainer, GridItem, 
    GlobalHeading, Image, ImageContainer, Description, 
    ClearFix, Button,
    PriceContainer,
    CurrencySymbol,
    PriceValue
  }