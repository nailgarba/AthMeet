import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { commentsByPost } from '../../src/graphql/queries';
import CommentPost from '../CommentPost';


const CommentsinComments = (comments) => {
/*
    //const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [testID, setTestID] = React.useState("");
    const postID = props;
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`----------props in CommentsinComments-------------`);
    console.log(props);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`----------postID in CommentsinComments-------------`);
    console.log(postID);*/ 

/*
    React.useEffect(() => {
    const fetchComments = async () => {
        setLoading(true);
        //get posts from DB
        try {
            const commentsData = await API.graphql(graphqlOperation(commentsByPost,
                {postID: props.props.id}));
                setComments(commentsData.data.commentsByPost.items);
                console.log(`------------------------------`);
                console.log(`------------------------------`);
                console.log(`------------------------------`);
                console.log(`----------comments in fetchComments-------------`);
                console.log(comments);
                console.log(`------------------------------`);
                console.log(`------------------------------`);
            }
            catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
            
            
        }
            
        //setTestID(postID.props.id);
        fetchComments();
    }, [])

    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`----------comments in CommentsinComments-------------`);
    console.log(comments);
    console.log(`------------------------------`);
    console.log(`----------comments.comments in CommentsinComments-------------`);
    console.log(`------------------------------`);
    console.log(comments.comments);*/

    return (
        <View style={{ width: '100%' }}>
            {comments &&<FlatList
                data={comments.comments}
                renderItem={({ item }) =>  <CommentPost comment={item} />}
                keyExtractor={(item) => item.id}
            />}

        </View>
    )
}

export default CommentsinComments;
