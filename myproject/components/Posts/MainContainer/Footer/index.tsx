import React from 'react';
import {View, Text} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import {MaterialCommunityIcons, Feather, Ionicons, AntDesign} from '@expo/vector-icons'

export type FooterContainerProps = {
    post: PostType,
}
const Footer = ({post}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name ={"comment-outline"} size={20} color={'grey'}/>  
        </View> 
        <View style={styles.iconContainer}>
            <AntDesign name ={"like2"} size={20} color={'grey'}/>
            <Text style={styles.number}>{post.numberOfLikes} </Text>   
        </View> 
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name ={"share"} size={20} color={'grey'}/>  
        </View> 
    </View>
)

export default Footer;