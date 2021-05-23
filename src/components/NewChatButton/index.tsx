import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import users from '../../data/users';
import { UserType } from '../ProfileScreenComponents';


const NewChatButton = () => {

  const navigation = useNavigation();

  const onClick = () => { 
    navigation.navigate('NewChatContacts');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onClick}
    >
      <FontAwesome5 name={"envelope"} size={30} color='tomato'></FontAwesome5>
    </TouchableOpacity>
  )
}

export default NewChatButton;

const styles = StyleSheet.create({
  button: {
    marginRight:15,
  }
});

