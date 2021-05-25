import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth, input } from 'aws-amplify';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useRoute } from '@react-navigation/native';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons } from '@expo/vector-icons';
import {getPost, commentsByPost} from '../src/graphql/queries';
import PostInComments from '../components/PostInCommentScreen'

import { PostType } from '../types';
import CommentInputBox from '../components/CommentInputBox';


export default function CommentsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const [user, setUser] = React.useState(null);
    const [post, setPost] = React.useState(null);
    const postID = route.params.postID;
    const postobj = route.params.postobj;/** 
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
    console.log(`---------------postobj in CommentsScreen ---------------`);
    console.log(postobj);
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);*/
    
    const [comments, setComments] = React.useState([]);
    
    React.useEffect(() => {
        const fetchPost= async () => {
            const postData = await API.graphql(graphqlOperation(getPost, { id: postID}));
            setPost(postData.data.getPost);/** 
            console.log(`------------------------------------------`);
            console.log(`------------------------------------------`);
            console.log(`---------------post in fetchpost ---------------`);
            console.log(post);
            console.log(`------------------------------------------`);
            console.log(`------------------------------------------`);
            console.log(`------------------------------------------`);*/
        }/**
        console.log(`------------------------------------------`);
        console.log(`------------------------------------------`);
        console.log(`---------------comments screen post id---------------`);
        console.log(postID);
        console.log(`------------------------------------------`);
        console.log(`------------------------------------------`);
        console.log(`------------------------------------------`); */
        fetchPost();
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
        }
        fetchUser();
        const fetchComments = async () => {
            const commentData = await API.graphql(graphqlOperation(commentsByPost, { postID: route.params.postID}));
            setComments(commentData.data.commentsByPost.items);
        }
        fetchComments();
    }, [])

   /** 
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
    console.log(`---------------post in comments screen ---------------`);
    console.log(post);
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
*/



    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={40} color="tomato" />
                </TouchableOpacity>
            </View>
            <View style={styles.postContainer}>
            {post && <PostInComments post= {post}></PostInComments>}
                
            </View>
            <View style={styles.commentsContainer}>
            </View>
            <CommentInputBox/>

                
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //padding: 15,
        marginTop: 25,
        paddingBottom: 5
    },
    postContainer: {

    },
    commentsContainer: {

    },
    inputContainer: {

    },
    backButton: {

    }

})