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
            renderItem={({item}) => <ChatListItem chatRoom = {item.chatRoom} />}
            keyExtractor={(item) => item.id}
        />
        
    </View>
)

export default PrivateMessagesFeed;
