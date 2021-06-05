import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { API, graphqlOperation, Auth, input } from 'aws-amplify';
import {  View } from '../components/Themed';
import { useRoute } from '@react-navigation/native';
import { getPost, commentsByPost } from '../src/graphql/queries';
import PostInComments from '../components/PostInCommentScreen'
import CommentInputBox from '../components/CommentInputBox';
import CommentsinComments from '../components/CommentsinComments';
import BackButton from '../components/BackButton';


export default function CommentsScreen() {
    const route = useRoute();
    const [comments, setComments] = React.useState([]);
    const [user, setUser] = React.useState(null);
    const [post, setPost] = React.useState(null);
    const postID = route.params.postID;

    React.useEffect(() => {
        const fetchPost = async () => {
            const postData = await API.graphql(graphqlOperation(getPost, { id: postID }));
            setPost(postData.data.getPost);
        }
        fetchPost();
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
        }
        fetchUser();
        const fetchComments = async () => {
            const commentData = await API.graphql(graphqlOperation(commentsByPost, { postID: postID }));
            setComments(commentData.data.commentsByPost.items);
        }
        fetchComments();
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton />
            </View>
            <View style={styles.postContainer}>
                {post && <PostInComments post={post}></PostInComments>}
            </View>
            <View style={styles.commentsContainer}>
                {comments && <CommentsinComments comments={comments} />}
            </View>
            <View style={styles.inputContainer}>
                {post && <CommentInputBox props={post} />}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    headerContainer: {
        //width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15,
        marginTop: 25,
        paddingBottom: 5,
        backgroundColor: '#e3e3e3',
    },
    postContainer: {
        justifyContent: 'space-between',
        marginBottom: 5,

    },
    commentsContainer: {
        marginBottom: 'auto',
    },
    inputContainer: {
    },
    backButton: {

    }

})