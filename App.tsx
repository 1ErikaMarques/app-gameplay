import React from 'react';
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'; //fonts que iremos usar
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading'; //vai segurar a tela de splash
import { useFonts } from 'expo-font'; //faz o carregamento de fontes

import { Routes } from './src/routes';
import { Background } from './src/components/Background';


export default function App() {
  const [fontsLoaded] = useFonts({ //carregamos as fonts antes da renderizacao
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded) { //enquanto as fonts n forem carregadas n abra o app,fica na tela de splash
    return <AppLoading />
  }

  return(
     <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}


