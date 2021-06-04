import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';
import moment from 'moment';


export type MainContainerProps = {
    post: PostType,
}
const MainContainer = ({ post }: MainContainerProps) => {
    const [url, setURL] = useState(post.image);
    /* const geturl=  async () =>{
         try{
             const accessURL = await Storage.get(post.image,{expires:60});
             console.log(`ACCESS URL:`,accessURL);
             setURL(accessURL);
         }catch(e){
             console.log(e);
         }
     } 
 
     useEffect(() => {
         geturl()
     }, [])
     */
    if (post?.image) {
        var res = post?.image.substring(0, 6);
        if (res == 'images') {
            var AWS = require('aws-sdk');
            var s3 = new AWS.S3({ accessKeyId: 'AKIA5PG7RCI6IPV5LK47', secretAccessKey: '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', region: 'eu-west-1' });

            var params = { Bucket: 'athmeets3bucket184241-dev', Key: post.image };
            s3.getSignedUrl('getObject', params, function (err, urll) {
                console.log('Your generated pre-signed URL is', urll);
                if (!!urll) { setURL(urll); }
            });
        }
    }


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


            {/*username */}
            {/*content */}
            {/*footer */}
        </View>
    )
}
//{!!post.image && <Image style={styles.image} source={{uri:post.image}}/>}

export default MainContainer;