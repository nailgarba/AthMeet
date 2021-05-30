import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { API, Auth, graphqlOperation, } from 'aws-amplify';
import { createMessage, updateChatRoom, } from '../../src/graphql/mutations';


const PostChatListItem = (props) => {
    const { chatRoom } = props.chatRoom;
    const postID = props.postID;
    const [otherUser, setOtherUser] = useState(null);
    const [isSent,setIsSent] = useState(false);
    const navigation = useNavigation();
    const [myUserId, setMyUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])


    React.useEffect(() => {
        console.log(`-------------------------------------------`);
        console.log(`-------------------------------------------`);
        console.log(`-------------------------------------------`);
        console.log(`---------------chatroom in PostChatListItem------------------`);
        console.log(chatRoom);
        console.log(`-------------------------------------------`);
        console.log(`-------------------------------------------`);
        console.log(`---------------props in PostChatListItem------------------`);
        console.log(props);
        console.log(`-------------------------------------------`);
        console.log(`-------------------------------------------`);
        console.log(`-------------------------------------------`);


        const getOtherUser = async () => {
            console.log(`-----/////////////--------------------`);
            console.log(`-------------------------------------------`);
            console.log(`-------------------------------------------`);
            console.log(`---------------chatroom in PostChatListItem------------------`);
            console.log(chatRoom);
            console.log(`-------------------------------------------`);
            console.log(`-------------------------------------------`);
            console.log(`---------------chatRoom.chatRoomUsers.items in PostChatListItem------------------`);
            console.log(chatRoom.chatRoomUsers.items);
            console.log(`-------------------------------------------`);
            console.log(`-------------------------------------------`);
            console.log(`-----------/////////---------------`);
            const userInfo = await Auth.currentAuthenticatedUser();
            if(chatRoom?.chatRoomUsers&&chatRoom.chatRoomUsers?.items)
            {if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);
            }}

        }
        getOtherUser();

    }, [])

    const updateChatRoomLastMessage = async (messageId: string) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateChatRoom, {
                    input: {
                        id: chatRoomID,
                        lastMessageID: messageId,
                    }
                })
            );
        } catch (e) {
            console.log(e);
        }
    }


    const onClick = async () => {
        setIsSent(true);
        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createMessage, {
                    input: {
                        content: "",
                        userID: myUserId,
                        chatRoomID:chatRoomID,
                        postID: postID
                    }
                })
            )
            await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
        } catch (e) {
            console.log(e);
        }
    }

    if (!otherUser) {
        return null;
    }

    return (
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: otherUser.image }} style={styles.profilePicture} />

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


                <View>
                    <TouchableOpacity onPress={onClick}>
                        {!isSent? <Ionicons name="md-send" size={28} color="tomato" /> : <FontAwesome name="check" size={28} color="tomato" />}
                    </TouchableOpacity>
                </View>

                <Text style={styles.time}>
                    {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
            </View>
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
        fontSize: 14,
        color: 'grey'
    },
});

