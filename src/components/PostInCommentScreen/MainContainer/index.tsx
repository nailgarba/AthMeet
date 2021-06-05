import React ,{useState } from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import { PostType } from '../../../types';
import {Ionicons} from '@expo/vector-icons';
import Footer from './Footer';
import moment from 'moment';
import {Storage } from 'aws-amplify';



export type MainContainerProps = {
    postt: PostType,
}
const MainContainer = (post) => {
    const [url, setURL] = useState("");
    const geturl = async () => {
        const signedURL = await Storage.get(post.post.image);
        setURL(signedURL);
  }
  React.useEffect(() => {
      geturl();
  }, [])



    return (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{post.post.user.name}</Text>
            <Text style= {styles.username}>@{post.post.user.username}</Text>
            <Text style= {styles.createdAt}>{moment(post.post.createdAt).fromNow()}</Text>
        </View>

        <View style= {styles.content}>
            <Text >{post.post.content}</Text>
            {!!post.post.image && <Image style={styles.image} source={{uri:url}}/>}
        </View>
        <View style= {styles.footer}>

        <Footer post={post.post}/>
        </View>
    </View>
)}

export default MainContainer;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
        justifyContent:'space-between',
    },
    postHeaderContainer: {
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
        //minHeight:30,
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
       // overflow: 'hidden',
    },
    footer:{
        minHeight:10
    }
});
