import React from 'react';
import {View, Text, FlatList} from 'react-native';
import posts from '../../data/posts';
import Post from '../Posts';
import users from '../../data/users';
import PrivateMessagesListContainer from '../PrivateMessagesListContainer';



const PrivateMessagesFeed = () => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {users}
            renderItem={({item}) => <PrivateMessagesListContainer user = {item.user} />}
            keyExtractor={(item) => item.id}
        />
        
    </View>
)

export default PrivateMessagesFeed;