import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

import { PostType } from '../../types';
export type CommentProps = {
    post: PostType,
}


const CommentButton = ({ post }: CommentProps) => {
    const postID =post.id;
    const postobj =post;
    const navigation = useNavigation();
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
        }
        fetchUser();
    }, [])
    const onPress = async () => {
        navigation.navigate('Comments',{
            postID: postID, postobj:postobj,
        }
        );
    }

    return (

        <View style={styles.commentContainer}>
            <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons name={"comment-outline"} size={20} color={'grey'} />
            
            </TouchableOpacity>
        </View>
    )
}
export default CommentButton;

const styles = StyleSheet.create({
    commentContainer: {
       flexDirection: "row",
       alignItems: "center"
    },
    number: {
        marginLeft: 5,
        color: 'grey',
        textAlign: 'center'
    },
});
