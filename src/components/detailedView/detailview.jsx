import React, { Fragment} from 'react';
import { GlobalHeading, ImageContainer } from '../../globalStyle';
import { DetailViewContainer } from './detailView.style';
import {Section} from '../common-components/cards/card.style';
import JsInterview from '../interviews/jsInterview';

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
