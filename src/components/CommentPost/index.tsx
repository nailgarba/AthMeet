import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import { CommentType } from '../../types';


export {CommentType} from '../../types'

export type CommentProps = {
    comment: CommentType,
}
const CommentPost = ({comment}: CommentProps) => (
    <View style= {styles.container}>
       <LeftContainer user={comment.user}/>
       <MainContainer comment={comment}/> 
    </View>
)

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        //padding: '15',
        borderBottomWidth: 1,
        borderColor: 'tomato',
    }
});


export default CommentPost;