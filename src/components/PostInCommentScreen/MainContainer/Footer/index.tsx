import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { PostType } from '../../../../types';
import CommentButton from '../../../CommentButton';

import LikeButton from '../../../LikeButton';
import {MaterialCommunityIcons, Feather, Ionicons, AntDesign} from '@expo/vector-icons'

export type FooterContainerProps = {
    post: PostType,
}
const Footer = ({post}: FooterContainerProps) => (
    <View style= {styles.container}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name ={"share"} size={20} color={'grey'}/>  
        </View> 
    </View>
)

//<LikeButton post= {post}></LikeButton>
export default Footer;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        flexDirection:"row",
       // marginTop: 4,
    },
    number:{
        marginLeft: 5,
        color: 'grey',
    },
    iconContainer:{
        flexDirection: "row",
    }
});



