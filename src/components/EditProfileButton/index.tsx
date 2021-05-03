import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, Entypo} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from "react-native";
import Colors from '../../constants/Colors';

const EditProfileButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('EditProfile');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
      <MaterialIcons name={"edit"} size={43} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'tomato',
        position: 'absolute',
        bottom: 30,
        right: 20,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems:'center',
        justifyContent: 'center',
    }
});
export default EditProfileButton;