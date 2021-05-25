import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';


import { createLike, deleteLike } from '../../src/graphql/mutations';
import { PostType } from '../../types';
export type LikeProps = {
    post: PostType,
}

const LikeButton = ({ post }: LikeProps) => {

    const [user, setUser] = React.useState(null);
    const [myLike, setMyLike] = React.useState(null);
    const [likesCount, setLikesCount] = React.useState(post.likes.items.length);
    React.useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);

            const searchedLike = post.likes.items.find(
                (like) => like.userID === currentUser.attributes.sub
            );
            setMyLike(searchedLike);
        }
        fetchUser();
    }, [])

    const submitLike = async () => {
        const like = {
            userID: user.attributes.sub,
            tweetID: post.id,
        }

        try {
            const res = await API.graphql(graphqlOperation(createLike, { input: like }))
            setMyLike(res.data.createLike);
            setLikesCount(likesCount + 1);
        } catch (e) {
            console.log(e);
        }
    }

    const removeLike = async () => {
        try {
            await API.graphql(graphqlOperation(deleteLike, { input: { id: myLike.id } }))
            setLikesCount(likesCount - 1);
            setMyLike(null);
        } catch (e) {
            console.log(e);
        }
    }
    const onLike = async () => {
        if (!user) {
            return;
        }

        if (!myLike) {
            await submitLike()
        } else {
            await removeLike();
        }

    }


    return (

        <View style={styles.likeContainer}>
            <TouchableOpacity onPress={onLike}>
                <AntDesign name={!myLike ? "hearto" : "heart"} size={20} color={!myLike ? 'grey' : 'red'} />
                <AntDesign name ={!myLike ? "like2": "like1"} size={20} color={!myLike ? 'grey' : 'tomato'}/>
            </TouchableOpacity>
            <Text style={styles.number}>{post.numberOfLikes}</Text>
        </View>


    )

}


export default LikeButton;


const styles = StyleSheet.create({
    likeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        marginLeft: 5,
        color: 'grey',
        textAlign: 'center'
    },
});
