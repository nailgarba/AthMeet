import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { API, graphqlOperation, Auth, input } from 'aws-amplify';
import { SimpleLineIcons, } from "@expo/vector-icons";
import { createFollow } from '../../src/graphql/mutations';
import { getUser } from '../../src/graphql/queries';
import { createMessage, updateChatRoom, } from '../../src/graphql/mutations';

export default class SendPostButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: props.postID,
            myID: "",
            chatRoomID:props.chatRoomID,
        }
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (userInfo) {
                this.setState({ myID: userInfo.attributes.sub });
            }
        }
        fetchUser();
        console.log(`----------------------------`)
        console.log(`--------------state----------`)
        console.log(this.state)
        console.log(`----------------------------`)
        console.log(`--------------props----------`)
        console.log(props)

    }

    sendMessage = async () => {
        console.log(`----------------------------`)
        console.log(`----------------------------`)
        console.log(`-----------state in send press-------------`)
        console.log(this.state)
        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createMessage, {
                    input: {
                        content: "Check out this post!",
                        userID: this.state.myID,
                        chatRoomID:this.state.chatRoomID,
                        postID:this.state.postID,
                    }
                })
            )
            await this.updateChatRoomLastMessage(newMessageData.data.createMessage.id)
        } catch (e) {
            console.log(e);
        }
    }
    updateChatRoomLastMessage = async (messageId: string) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateChatRoom, {
                    input: {
                        id: this.state.chatRoomID,
                        lastMessageID: messageId,
                    }
                })
            );
        } catch (e) {
            console.log(e);
        }
    }



    render() {
        return (
                <TouchableOpacity onPress={this.sendMessage}>
                    <View style={styles.buttonContainer}>
                        <Ionicons name="md-send" size={28} color="white" />
                    </View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 10,
    },
    buttonContainer: {
        
        backgroundColor: 'tomato',
        padding:3,
        borderRadius: 6,
    },
});