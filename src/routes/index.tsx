 import React from "react";
 import { NavigationContainer} from "@react-navigation/native";//ele quem vai ficar por volta das rotas
 import { AuthRoutes } from './auth.routes'

 export function Routes(){
   return(
     
        <NavigationContainer>       
          <AuthRoutes />
        </NavigationContainer>
     
   )
 }