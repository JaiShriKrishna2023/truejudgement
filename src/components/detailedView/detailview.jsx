import React, { Fragment, useState } from 'react';
import { GlobalHeading, Image, ImageContainer } from '../../globalStyle';
import { DetailViewContainer } from './detailView.style';
import { Description, Section, SectionTitle } from '../common-components/cards/card.style';




const DetailView=(props)=>{
    console.log('DetailViewProps', props);
    

return(
    <Fragment>
        <DetailViewContainer id={'detail-view'}>
         <GlobalHeading>{props?.selectedName}</GlobalHeading>
           {props?.productOptions.map((item)=>
           item?.name===props?.selectedName ?
           <Fragment>
            <ImageContainer width={'100%'} height={'auto'} src={item?.imagePath
          }/>
          <Section>
            {item?.description} </Section>
            </Fragment>

          :''
          )}

        </DetailViewContainer>

<DetailViewContainer>

    
        {/* {console.log(props?.itemDetails[props?.selectedItem])}
        {props?.itemDetails[props?.selectedItem].map((item, index)=>item?.steps.map((item, index)=>
        <Section>
            <SectionTitle>Step{item?.id}:{item?.step}</SectionTitle>
            {item?.description} </Section>
      
        ))}  */}
   
</DetailViewContainer>

    </Fragment>
)
}
export default DetailView;
