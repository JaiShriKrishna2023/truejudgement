import React, { Fragment, useState } from 'react';
import { GlobalHeading, Image, ImageContainer } from '../../globalStyle';
import { DetailViewContainer } from './detailView.style';
import { Description, Section, SectionTitle } from '../common-components/cards/card.style';
import TransformText from '../common-components/TransformText/transformText';
import JsInterview from '../interviews/jsInterview';
import { descriptionType } from '../../constants/applicationConstants';




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
        
       {console.log(descriptionType?.item?.description)}

          {item?.description &&
           (item?.description ==='JS' ||
           item?.description==='ReactJS'
           ) ? <JsInterview jsData={item}/>:<Section>
            {item?.description} </Section>}
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
