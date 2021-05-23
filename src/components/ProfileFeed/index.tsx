import React from 'react';
import {View, Text, FlatList} from 'react-native';

import users from '../../data/users';
import profilePosts from '../../data/profilePosts';
import ProfilePost from '../ProfilePost';

const ProfileFeed = () => (
    <View style ={{width: '100%'}}>
        <FlatList
            data = {users}
            renderItem={({item}) => <ProfilePost user = {item.user} />}
            keyExtractor={(item) => item.id}
        />
    </View>
)

export default ProfileFeed;