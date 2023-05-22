import styled from 'styled-components';
const RightPanelContainer=styled.div`
margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const PageTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;

export {RightPanelContainer, PageTitle}