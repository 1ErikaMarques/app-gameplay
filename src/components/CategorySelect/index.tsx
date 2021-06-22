import React from 'react';
import { ScrollView } from 'react-native';//ativa rolagem


import { styles } from './styles';



export function CategorySelect() {
  return(
    <ScrollView 
    horizontal
    style={styles.container}
    showsHorizontalScrollIndicator={false} //para n aparecer a barra de rolagem
    contentContainerStyle={{paddingRight: 40 }}//quando a listagem acabar ainda tem um espacamento da borda
    >
      {
        
      }
      </ScrollView>
  );
}