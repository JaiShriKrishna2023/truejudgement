import React, { Fragment } from 'react'
import {Title, CardContainer, CardImg} from './card.style';
import { ClearFix, Acnhor, Image } from '../../../globalStyle';
const Card = (props) => {
  // console.log(props)
  
 return(
 <Fragment>
 <CardContainer id={'cardContainer'}>
 <CardImg id={'cardImage'}>
 <Acnhor>
    <Image src={props?.imgPath}/>
    </Acnhor> 
  </CardImg>

<Title>
    {props?.title}
    </Title> 
  </CardContainer>
<ClearFix></ClearFix>
</Fragment>

  

  
  )
}
export default Card;