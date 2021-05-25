import React from 'react';
import {View, Text, Image} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';
import Footer from './Footer';
import moment from 'moment';


export type MainContainerProps = {
    postt: PostType,
}
const MainContainer = (post) => {
    /*
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`----------Post in MainContainer-------------`);
    console.log(post);
    console.log(`------------------------------`);
    console.log(`------------------------------`);*/
    
    return (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{post.post.user.name}</Text>
            <Text style= {styles.username}>@{post.post.user.username}</Text>
            <Text style= {styles.createdAt}>{moment(post.post.createdAt).fromNow()}</Text>
        </View>

        <View >
            <Text style= {styles.content}>{post.post.content}</Text>
            {!!post.post.image && <Image style={styles.image} source={{uri:post.post.image}}/>}
        </View>
        <Footer post={post.post}/>

        
        {/*username */}
        {/*content */}
        {/*footer */}
    </View>
)}

export default MainContainer;