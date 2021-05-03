import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const NewPostButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NewPost');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
      <Entypo name={"new-message"} size={37} color="white" />
    </TouchableOpacity>
  )
}

export default NewPostButton;