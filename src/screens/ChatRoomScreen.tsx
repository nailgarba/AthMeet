import React, { Component } from 'react';
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
import BackButton from '../components/BackButton';



export default class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      myId: "",
      routeid: props.route.params.id,
      routename: props.route.params.name,
    }


    const fetchMessages = async () => {
      try {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByChatRoom, {
            chatRoomID: this.state.routeid,
            sortDirection: "DESC",
          })
        )
        if (messagesData) {
          this.setState({
            messages: messagesData.data.messagesByChatRoom.items
          });
        }
        console.log("FETCH MESSAGES");
      } catch (e) {
        console.log(e);
      }
    }
    fetchMessages();


    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      if (userInfo) {
        this.setState({
          myId: userInfo.attributes.sub
        });
      }
    }
    getMyId();
  }

  fetchMessages = async () => {
    try {
      const messagesData = await API.graphql(
        graphqlOperation(
          messagesByChatRoom, {
          chatRoomID: this.state.routeid,
          sortDirection: "DESC",
        })
      )
      if (messagesData) {
        this.setState({
          messages: messagesData.data.messagesByChatRoom.items
        });
      }
      console.log("FETCH MESSAGES");
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount = () => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;
        if (newMessage.chatRoomID !== this.state.routeid) {
          console.log("Message is in another room!")
          return;
        }
        this.fetchMessages();
      }
    });
    return () => subscription.unsubscribe();
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton />
          <Text style={styles.nameContainer}>{this.state.routename}</Text>
        </View>
        <View style={styles.mainContainer}>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) => <ChatMessage myId={this.state.myId} message={item} />}
            inverted
          />
        </View >
        <View style={styles.inputContainer}>

          <InputBox chatRoomID={this.state.routeid} />
        </View>

      </SafeAreaView>
    );
  }
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
  nameContainer: {
    fontSize: 24,
    alignSelf: 'center'

  },
  mainContainer: {
    flex: 1,

  },
  inputContainer: {
    //alignSelf: 'flex-end',

  },
  backButton: {

  }

})
