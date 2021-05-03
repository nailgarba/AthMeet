import React from 'react';
import {View, Text, FlatList} from 'react-native';

import profilePosts from '../../data/profilePosts';
import ProfilePost from '../ProfilePost';

const ProfileFeed = () => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {profilePosts}
            renderItem={({item}) => <ProfilePost post = {item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default ProfileFeed;