import styled from 'styled-components';
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardContainer = styled.div`
max-width: 100%;
    height: auto;
    background-color: rgba(204, 204, 204, 0.24);
    border: 1px solid rgb(204, 204, 204);
    min-width: 172px;

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
  color: rgb(59 55 55 / 86%);
  font-weight: normal;
  font-size:100%;
`
const Description = styled.p`
  color: rgb(59 55 55 / 86%);
  font-weight: 300;
  `

export {Title, Description, CardContainer, CardWrapper, CardImg}