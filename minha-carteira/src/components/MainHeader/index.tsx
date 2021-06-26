import React , { useMemo } from "react";
import emojis from "../../utils/emojis";

import { Container, Profile, Welcome, UserName } from './styles'

const MainHeader: React.FC = () => {

   const emoji = useMemo(()=> {
      const indece = Math.floor(Math.random() * emojis.length )
      return emojis[indece];
   }, [])
   return(
      <Container>
         <h1>Toogle</h1>
         <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <UserName>Rafael Cunha</UserName>
         </Profile>
      </Container>
   )
}

export default MainHeader;