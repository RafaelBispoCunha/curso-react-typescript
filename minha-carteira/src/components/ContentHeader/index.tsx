import React from 'react';
import { Container, TitleContainer, Controllers } from './styles'
import SelectInput from '../../components/SelectInput';

interface IContentHeader{
   title: string;
   lineColor: string;
   children: React.ReactNode;
}
const ContentHeader: React.FC<IContentHeader> = ({
   title, lineColor, children
}) => {

   const options = [
      {value: 'Rafael', label: 'Rafael'},
      {value: 'Maria', label: 'Maria'},
      {value: 'Ana', label: 'Ana'}
   ]
 
   return(
      <Container>
         <TitleContainer lineColor={lineColor}>
            <h1>{title}</h1>
         </TitleContainer>
         <Controllers>
            {children}
         </Controllers>
      </Container>
   )
}

export default ContentHeader;