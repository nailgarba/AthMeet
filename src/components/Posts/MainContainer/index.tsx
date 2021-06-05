import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';
import moment from 'moment';

import { S3Image } from 'aws-amplify-react-native';

export type MainContainerProps = {
    post: PostType,
}
const MainContainer = ({ post }: MainContainerProps) => {
    const [url, setURL] = useState(post.image);

    const geturl=  async () =>{
    const signedURL = await Storage.get(post.image);
    setURL(signedURL);
    }
    geturl();


    return (
        <View style={styles.container}>
            <View style={styles.postHeaderContainer}>
                <Text style={styles.name}>{post.user.name}</Text>
                <Text style={styles.username}>@{post.user.username}</Text>
                <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>
            </View>

            <View >
                <Text style={styles.content}>{post.content}</Text>
                {!!post.image && <Image style={styles.image} source={{ uri: url }} />}
            </View>
            <Footer post={post} />
        </View>
    )
}


export default MainContainer;