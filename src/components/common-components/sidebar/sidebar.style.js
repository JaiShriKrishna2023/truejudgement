import styled from 'styled-components';
const SidebarWrapper=styled.div`
eight: auto;
    width: 20%;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    overflow: auto;
    border: 1px solid rgb(204, 204, 204);
    top: 78px;
    left: 5px;
    max-width: 100%;
    position: fixed !important;
    min-height: 645px;
`
const ItemContainer=styled.div`
font-family: Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    
    background-color: aliceblue;
    padding: 0px 3px 0px 3px;
`;
const ItemsList=styled.a`
width: 100%;
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
