import React from 'react';
import {View, Text, Image} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';
import Footer from './Footer';



export type MainContainerProps = {
    post: PostType,
}
const MainContainer = ({post}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style= {styles.username}>@{post.user.username}</Text>
            <Text style= {styles.postedAt}>{post.postedAt}</Text>
        </View>

        <View >
            <Text style= {styles.content}>{post.content}</Text>
            {!!post.image && <Image style={styles.image} source={{uri:post.image}}/>}
        </View>
        <Footer post={post}/>

        
        {/*username */}
        {/*content */}
        {/*footer */}
    </View>
)

export default MainContainer;