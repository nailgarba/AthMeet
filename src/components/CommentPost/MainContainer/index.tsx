import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { CommentType } from '../../../types';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';


export type MainContainerProps = {
    comment: CommentType,
}
const MainContainer = ({comment}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style= {styles.commentHeaderContainer}>
            <Text style={styles.name}>{comment.user.name}</Text>
            <Text style= {styles.username}>@{comment.user.username}</Text>
            <Text style= {styles.createdAt}>{moment(comment.createdAt).fromNow()}</Text>
        </View>     
        <View >
            <Text style= {styles.content}>{comment.content}</Text>
        </View>
    </View>
)

export default MainContainer;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
    },
    commentHeaderContainer: {
        flexDirection: 'row',
    },
    name:{
        marginRight:5,
        fontWeight:'bold',
    },
    username: {
        marginRight:5,
        color: 'grey',
    },
    createdAt: {
        marginRight:5,
        color: 'grey',
    },
    content:{
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,

    },
    image: {
        marginVertical: 5,
        width: "100%",
        height: 230,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
});
