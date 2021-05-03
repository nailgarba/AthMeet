import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from "react-native";
import Colors from '../../constants/Colors';

const PrivateMessagesListButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('PrivateMessagesList');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
    <FontAwesome5 name = {"envelope"} size ={30} color='tomato'></FontAwesome5>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        
    }
});
export default PrivateMessagesListButton;