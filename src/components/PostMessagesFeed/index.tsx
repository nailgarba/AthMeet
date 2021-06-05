import React from 'react';
import { View, Text, FlatList } from 'react-native';
import posts from '../../data/posts';
import Post from '../Posts';
import users from '../../data/users';
import PrivateMessagesListContainer from '../PrivateMessagesListContainer';
import PostChatListItem from '../PostChatListItem';



const PostMessagesFeed = (props) => {
    console.log(`-----------------------`)
    console.log(`----------PostMessagesFeed props-------------`)
    console.log(props)
    console.log(`-----------------------`)
    console.log(`----------PostMessagesFeed props.chatRooms-------------`)
    console.log(props.chatRooms)
    return(
    <View style={{ width: '100%' }}>
        <FlatList
            data={props.chatRooms}
            renderItem={({ item }) => <PostChatListItem chatRoom={item.chatRoom} postID={props.postID} chatRoomID={item.chatRoomID} />}
            keyExtractor={(item) => item.id}
        />

    </View>
)
}

export default PostMessagesFeed;
/*
{
    <FlatList
      style={{ width: '100%' }}
      data={testchatRooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
      keyExtractor={(item) => item.id}
    />}
/*
const PrivateMessagesFeed = () => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {users}
            renderItem={({item}) => <PrivateMessagesListContainer user = {item.user} />}
            keyExtractor={(item) => item.id}
        />

    </View>
)
*/