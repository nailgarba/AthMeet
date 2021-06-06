import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { PostType } from '../../../../types';
import CommentButton from '../../../CommentButton';

import LikeButton from '../../../LikeButton';
import {MaterialCommunityIcons, Feather, Ionicons, AntDesign} from '@expo/vector-icons'
import ShareButton from '../../../ShareButton';

export type FooterContainerProps = {
    post: PostType,
}
const Footer = ({post}: FooterContainerProps) => (
    <View style= {styles.container}>
        {post && <ShareButton post={post}></ShareButton>} 

    </View>
)

export default Footer;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"flex-end",
        flexDirection:"row",
        marginLeft: 4,
    },
    number:{
        marginLeft: 5,
        color: 'grey',
    },
    iconContainer:{
        flexDirection: "row",
    }
});



