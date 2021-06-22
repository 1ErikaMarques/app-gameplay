import React from 'react';
/* import { RectButton, RectButtonProps } from 'react-native-gesture-handler' */
import { 
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps, 
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps& { //vai receber tbm as propriedades desse componente
  title: string; //para que seja opcional ? antes de :
}

export function ButtonIcon({title, ...rest } : Props) {
  return(
    <TouchableOpacity 
    style={styles.container}
    {...rest} //o resto das propriedade que sobram dps das que estao dentro das chaves
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}