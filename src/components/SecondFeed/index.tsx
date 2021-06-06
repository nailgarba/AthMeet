import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../src/graphql/queries';
import Post from '../Posts';
const SecondFeed = (props) => {
   
    const [posts, setPosts] = useState([]);
    
    const [userID, setUserID] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
      
        setLoading(true);
        //get posts from Database
        try {
            const postsData = await API.graphql(graphqlOperation(listPosts,
               { filter: {userID: {contains: props.id}}}));
            setPosts(postsData.data.listPosts.items);
        }
        catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }


    }
    useEffect(() => {
        if(props && props.id){
            setUserID(props.id);
            fetchPosts();
        }
    }, [])



    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
                refreshing={loading}
                onRefresh={fetchPosts}
            />

        </View>
    )
}

export default SecondFeed;
