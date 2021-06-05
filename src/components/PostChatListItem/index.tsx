import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { Auth, } from 'aws-amplify';
import SendPostButton from '../SendPostButton';
import { Storage } from 'aws-amplify';


const PostChatListItem = (props) => {
    const { chatRoom } = props;
    const [otherUser, setOtherUser] = useState(null);
    const chatRoomID = props.chatRoomID
    const postID = props.postID;
    const navigation = useNavigation();
    const [url, setURL] = useState("");
    
    React.useEffect(() => {
        //Get other user in the chatroom
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
        if(otherUser?.image){
            geturl(otherUser);

        }
    }, [])

    React.useEffect(() => {
    
    }, [])
    const geturl = async (otherUser) => {
        const signedURL = await Storage.get(otherUser.image);
        setURL(signedURL);
    }
    

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.chatRoomUsers.items[0].chatRoomID,
            name: otherUser.name,
        })
    }

    if (!otherUser) {
        return (<View />);
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>

                    <View style={styles.lefContainer}>
                        <Image source={{ uri: url }} style={styles.profilePicture} />
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{otherUser.name}</Text>
                            <Text
                                numberOfLines={2}
                                style={styles.lastMessage}>
                                {chatRoom.lastMessage
                                    ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
                                    : <View />}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.time}>
                        {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                    </Text>
                </View>
                <View>
                    <SendPostButton chatRoomID={chatRoomID} postID={postID} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default PostChatListItem;


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'tomato',
    },
    lefContainer: {
        flexDirection: 'row',
    },
    mainContainer: {
        width:"90%",
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
    },
    time: {
        alignSelf:"flex-end",
        fontSize: 14,
        color: 'grey'
    },
});



