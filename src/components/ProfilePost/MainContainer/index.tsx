import React from 'react';
import {View, Text, Image} from 'react-native';
import { ProfileType } from '../../../types';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';



export type MainContainerProps = {
    post: ProfileType,
}
const MainContainer = ({post}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style= {styles.username}>@{post.user.username}</Text>
        </View>

        <View >
            <Text style= {styles.content}>Main Gym: {post.mainGym}</Text>
            <Text style= {styles.content}>Main Sport: {post.mainSport}</Text>
            <Text style= {styles.content}>Level: {post.level}</Text>
        </View>

    </View>
)


export default MainContainer;