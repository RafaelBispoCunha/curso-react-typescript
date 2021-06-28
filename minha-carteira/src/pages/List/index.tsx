import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard/indext';

import { Container, Content } from './styles'
const options = [
   {value: 'Rafael', label: 'Rafael'},
   {value: 'Maria', label: 'Maria'},
   {value: 'Ana', label: 'Ana'}
]

const List: React.FC = () =>{
   return(
      <Container>
         <ContentHeader  title="Saídas" lineColor="#E44C4E">
            <SelectInput options={options}/>
         </ContentHeader>

         <Content>
         <HistoryFinanceCard
            tagColor="#E44C4E"
            title="Conta de Luz"
            subtitle="28/06/2021"
            amount="R$ 130,00"
         />
         </Content>
      </Container>
   )
}

export default List;
