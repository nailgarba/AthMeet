import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,Ionicons, Entypo} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AthleteFinderFilterButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AthleteFinderFilter');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
      <Ionicons name={"md-filter"} size={40} color="white" />
    </TouchableOpacity>
  )
}

export default AthleteFinderFilterButton;