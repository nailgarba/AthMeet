import React, { Component } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SharePostList from '../SharePostList';
import { useNavigation } from '@react-navigation/native';


const ShareButton = (props) => {

    const post = props.post;
    const navigation = useNavigation();
    const goToPostMessagesScreen = () => {
        navigation.navigate('PostSend', {
            postID: post.id,
        });
    }


    return (
        <View>

            <TouchableOpacity onPress={goToPostMessagesScreen}>
                {post && <MaterialCommunityIcons name={"share"} size={20} color={'grey'} />}
            </TouchableOpacity>
        </View>
    );


};


export default ShareButton;
