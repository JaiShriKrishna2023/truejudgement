import styled from 'styled-components';
const SidebarNav=styled.nav`
margin: 0;
padding: 0;
width: 200px;
background-color: #f1f1f1;
position: fixed;
height: 100%;
overflow: auto;
@media screen and (max-width: 700px) {
          width: 100%;
          height: auto;
          position: relative;
       
      }
`;


const SidebarListItem=styled.a`
display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  & .activeProduct{
    background-color: #04AA6D;
  color: white;
  }

  @media screen and (max-width: 700px) {
    float: left;
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
 
}




`;





export {SidebarNav,SidebarListItem, }
