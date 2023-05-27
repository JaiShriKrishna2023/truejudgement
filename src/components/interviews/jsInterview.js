import React, { Fragment} from 'react';
import {Question, Answer} from './jsINterview.style';
import TransformText from '../common-components/TransformText/transformText';






const JsInterview=(props)=>{
    console.log('JsInterviewProps', props);



return(
    <Fragment>
      {props?.jsData?.questions && props?.jsData?.questions.map((item, index)=> 
      <Fragment>
      <Question key={index}>Question-{index+1}-{item?.question}</Question>
       <Answer>
        Answer:-
       <TransformText text={item?.answer}></TransformText>
       </Answer>
       </Fragment>
      )}
    
    </Fragment>
)
}
export default JsInterview;
