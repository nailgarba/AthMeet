import React from 'react';
import {View, Text, FlatList} from 'react-native';
import posts from '../../data/posts';
import Post from '../Posts';

const ProfilePage = () => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {posts}
            renderItem={({item}) => <Post post = {item} />}
            keyExtractor={(item) => item.id}
        />
        
    </View>
)

export default ProfilePage;