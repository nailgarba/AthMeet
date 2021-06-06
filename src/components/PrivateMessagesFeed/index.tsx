import React from 'react';
import {View, Text, FlatList} from 'react-native';
import posts from '../../data/posts';
import Post from '../Posts';
import users from '../../data/users';
import PrivateMessagesListContainer from '../PrivateMessagesListContainer';
import ChatListItem from '../ChatListItem';



const PrivateMessagesFeed = (props) => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {props.chatRooms}
            renderItem={({item}) => <ChatListItem chatRoom = {item.chatRoom} user1url={item.chatRoom.chatRoomUsers.items[0].user.image} user2url={item.chatRoom.chatRoomUsers.items[1].user.image} />}
            keyExtractor={(item) => item.id}
        />
        
    </View>
)

export default PrivateMessagesFeed;
