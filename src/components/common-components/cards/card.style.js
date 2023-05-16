import styled from 'styled-components';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardContainer = styled.div`
max-width:100%;
height:auto;
background-color:rgb(204 204 204 / 24%);
border:1px solid #ccc;

  `;
  const CardImg = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-x: center;
`;
const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  `

export {Title, Description, CardContainer, CardWrapper, CardImg}