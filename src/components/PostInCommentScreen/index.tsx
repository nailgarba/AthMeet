import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import { PostType } from '../../types';

export type PostProps = {
postt: PostType,
}
const PostInComments = (post) =>{


    return (
    <View style= {styles.container}>
        <MainContainer post={post.post}/> 
    </View>
)
}

export default PostInComments;


const styles = StyleSheet.create({
    container: {
        width:'100%',
        minHeight:100,
        flexDirection: 'row',
        //padding: '15',
        paddingBottom:10,
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderColor: 'tomato',
    }
});

