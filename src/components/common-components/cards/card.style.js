import styled from 'styled-components';

const CardContainer = styled.div`
padding: 0 6px;
float: left;
width: 24.99999%;
@media only screen and (max-width: 700px) {
    width: 49.99999%;
    margin: 6px 0;
 
}
@media only screen and (max-width: 500px) {
    width: 100%;
}

  `;
  const CardImg = styled.div`
  border: 1px solid #ccc;
 
`;
const Title = styled.div`
padding: 15px;
text-align: center;
`
const Description = styled.div`
 padding: 15px;
  text-align: center;
  `

  
const Section = styled.section`
  color: rgb(59 55 55 / 86%);
  font-weight: 300;
  `

  const SectionTitle = styled.b`
  color: rgb(59 55 55 / 86%);
  font-weight: 300;
  `

export {Title, Description, CardContainer, CardImg, Section, SectionTitle}