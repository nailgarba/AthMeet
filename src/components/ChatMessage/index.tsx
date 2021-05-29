import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Colors from "../../constants/Colors";
import { Message } from "../../types";
import moment from "moment"

export type ChatMessageProps = {
  message: Message;
  myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props;

  const isMyMessage = () => {
    return message.user.id === myId;
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox, {
          backgroundColor: isMyMessage() ? '#ffa494' : '#d1d1d1',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).calendar()}</Text>
      </View>
    </View>
  )
}
//<Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>

export default ChatMessage;


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    time: {
      alignSelf: "flex-end",
      color: 'black'
    },
    messageBox: {
      borderRadius: 5,
      padding: 10,
    },
    message: {
    },
    name: {
      color: Colors.light.tint,
      fontWeight: "bold",
      marginBottom: 5,
    },
  });
