import * as React from 'react';
import {FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {Auth, API, graphqlOperation} from 'aws-amplify';

import { messagesByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';
import InputBox from "../components/InputBox";
//CAN DELETE
export default function PrivateMessagesScreen() {
    const [messages, setMessages] = React.useState([]);
    const [myId, setMyId] = React.useState(null);
    const route = useRoute();
    
    //fetch messages for chatrooms
    const fetchMessages = async () => {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByChatRoom, {
              chatRoomID: route.params.id,
              sortDirection: "DESC",
            }
          )
        )
    
        console.log("FETCH MESSAGES")
        setMessages(messagesData.data.messagesByChatRoom.items);
      }

      React.useEffect(() => {
        fetchMessages();
      }, [])

      React.useEffect(() => {
        const getMyId = async () => {
          const userInfo = await Auth.currentAuthenticatedUser();
          setMyId(userInfo.attributes.sub);
        }
        getMyId();
      }, [])

      //Subscribe to messages so that new messages are updated automatically
      React.useEffect(() => {
        const subscription = API.graphql(
          graphqlOperation(onCreateMessage)
        ).subscribe({
          next: (data) => {
            const newMessage = data.value.data.onCreateMessage;
    
            if (newMessage.chatRoomID !== route.params.id) {
              console.log("Message is in another room!")
              return;
            }
            fetchMessages();
          }
    });
    return () => subscription.unsubscribe();
    }, [])

    return (
        <View>
            <FlatList
                data={messages}
                renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
                inverted
            />
            <InputBox chatRoomID={route.params.id} />
        </View>
    );
}


