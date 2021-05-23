import React from 'react';
import {View, Text, Image} from 'react-native';
import {UserType} from '../../../types';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';



export type MainContainerProps = {
    user: UserType,
}
const MainContainer = ({user}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style= {styles.username}>@{user.username}</Text>
        </View>

        <View >
            <Text style= {styles.content}>Main Gym: {user.mainGym}</Text>
            <Text style= {styles.content}>Main Sport: {user.mainSport}</Text>
            <Text style= {styles.content}>Level: {user.level}</Text>
        </View>

    </View>
)


export default MainContainer;