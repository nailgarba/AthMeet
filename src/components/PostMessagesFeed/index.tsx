import React from 'react';
import { View, Text, FlatList } from 'react-native';
import posts from '../../data/posts';
import Post from '../Posts';
import users from '../../data/users';
import PrivateMessagesListContainer from '../PrivateMessagesListContainer';
import PostChatListItem from '../PostChatListItem';



const PostMessagesFeed = (props) => {
    return(
    <View style={{ width: '100%' }}>
        <FlatList
            data={props.chatRooms}
            renderItem={({ item }) => <PostChatListItem chatRoom={item.chatRoom} postID={props.postID} chatRoomID={item.chatRoomID} user1url={item.chatRoom.chatRoomUsers.items[0].user.image} user2url={item.chatRoom.chatRoomUsers.items[1].user.image} />}
            keyExtractor={(item) => item.id}
        />

    </View>
)
}

export default PostMessagesFeed;
