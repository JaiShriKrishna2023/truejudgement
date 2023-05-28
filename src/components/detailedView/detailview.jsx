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
        
           {props?.productOptions.map((item)=>
           <Fragment>
             <GlobalHeading>{item?.name}</GlobalHeading>
            <ImageContainer width={'100%'} height={'auto'} src={item?.imagePath
          }/>
        
      

          {item?.description &&
           (item?.description ==='JS' ||
           item?.description==='ReactJS'
           ) ? <JsInterview jsData={item}/>:<Section>
            {item?.description} </Section>}
            </Fragment>

    
          )}

        </DetailViewContainer>

<DetailViewContainer>

</DetailViewContainer>

    </Fragment>
)
}
export default DetailView;
