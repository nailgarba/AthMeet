import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
function BackButton() {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="tomato" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
backButton: {
  },
});

export default BackButton;