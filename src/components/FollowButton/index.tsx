import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';


const FollowButton = (props) => {


    const onClick = () => {
        navigation.navigate('Follow', {
          id: chatRoom.chatRoomID,
          name: otherUser.name,
        })
      }

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <Text style={styles.followsTexts}>Followers </Text>
            </TouchableOpacity>
        </View>


    )

}
export default FollowButton;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 'auto',
        flex: 1,
        marginTop: 5,
    },
})