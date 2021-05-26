import * as React from 'react';
import { FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { messagesByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';
import InputBox from '../components/InputBox';
import ChatMessage from '../components/ChatMessage';

export default function ChatRoomScreen() {
  const [messages, setMessages] = React.useState([]);
  const [myId, setMyId] = React.useState(null);
  const route = useRoute();
  const navigation = useNavigation();


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
    fetchMessages();
  }, [])

  React.useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])

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
        // setMessages([newMessage, ...messages]);
      }
    });
    return () => subscription.unsubscribe();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="tomato" />
        </TouchableOpacity>
        <Text style={styles.nameContainer}>{route.params.name}</Text>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
          inverted
        />
      </View >
      <View style={styles.inputContainer}>

        <InputBox chatRoomID={route.params.id} />
      </View>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
  },
  headerContainer: {
    //width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 15,
    marginTop: 25,
    paddingBottom: 5,
    backgroundColor: '#e3e3e3',
  },
  nameContainer:{
    fontSize: 24,
    alignSelf: 'center'

  },
  mainContainer: {
    flex:1,

  },
  inputContainer: {
    //alignSelf: 'flex-end',

  },
  backButton: {

  }

})

