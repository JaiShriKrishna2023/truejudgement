import styled from 'styled-components';
const SidebarWrapper=styled.div`
height: auto;
    width:auto;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    overflow: auto;
    position: fixed !important;
    border: 1px solid #ccc;
    top: 78px;
    left: 5px;
    max-width:100%;
`
const ItemContainer=styled.div`
font-family: Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    min-height: 704px;
    background-color: aliceblue;
    padding: 0px 3px 0px 3px;
`;
const ItemsList=styled.a`
width: 92%;
    display: block;
    padding: 12px 0px 10px 15px;
    border: none;
    white-space: normal;
    float: none;
    outline: 0px;
    text-align: left;
    color: #CD2;
    font-size: 150%;
`;



export {SidebarWrapper, ItemContainer, ItemsList}
