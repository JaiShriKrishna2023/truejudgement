import React, { Fragment, useState } from 'react';
import { GlobalHeading, Image, ImageContainer } from '../../globalStyle';
import { DetailViewContainer } from './detailView.style';
import { Description, Section, SectionTitle } from '../common-components/cards/card.style';




const DetailView=(props)=>{

    

return(
    <Fragment>
        <DetailViewContainer id={'detail-view'}>
          <GlobalHeading/>
          <ImageContainer width={'672px'} height={'300px'} src={props?.productOptions[0].imagePath
}>
         
          </ImageContainer>
          
        </DetailViewContainer>

<DetailViewContainer>

    
        {console.log(props?.itemDetails[props?.selectedItem])}
        {props?.itemDetails[props?.selectedItem].map((item, index)=>item?.steps.map((item, index)=>
        <Section>
            <SectionTitle>Step{item?.id}:{item?.step}</SectionTitle>
            {item?.description} </Section>
      
        ))}
   
</DetailViewContainer>

    </Fragment>
)
}
export default DetailView;
