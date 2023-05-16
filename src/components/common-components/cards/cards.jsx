import React from 'react'
import {Title, Description, CardContainer, CardImg} from './card.style';
const Card = (props) => {
  console.log(props)
  const imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSQVX8vJ1-SJzkr_JPqNPjKQhs67nnQK10A&usqp=CAU';
 return(<CardContainer id={'cardContainer'}>
  <CardImg id={'cardImage'} img={props?.imgPath}/>
    <Title title={'cardTitle'}>{props?.title}</Title>
    <Description description={'cardDescription'}>
    {props?.description}
    </Description>
  </CardContainer>)
}
export default Card;