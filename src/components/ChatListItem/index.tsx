import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { Auth, } from 'aws-amplify';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const [otherUser, setOtherUser] = useState(null);

  const navigation = useNavigation();

  React.useEffect(() => {
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`---------------chatroom in ChatListItem------------------`);
    console.log(chatRoom);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`---------------props in ChatListItem------------------`);
    console.log(props);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);


    const getOtherUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        if (chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
          setOtherUser(chatRoom.chatRoomUsers.items[1].user);
        } else {
          setOtherUser(chatRoom.chatRoomUsers.items[0].user);
        }
      
    }

 //   if (chatRoom && chatRoom.items) {
      getOtherUser();
   // }
  }, [])

  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.chatRoomID,
      name: otherUser.name,
    })
  }

  if (!otherUser) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
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

        <Text style={styles.time}>
          {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ChatListItem;


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

