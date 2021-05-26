import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PrivateMessagesFeed from '../components/PrivateMessagesFeed';
import ChatListItem from '../components/ChatListItem';
import { API, graphqlOperation, Auth, } from 'aws-amplify';
import { getUser, listChatRooms } from '../customgraphql/queries';
import NewChatButton from '../components/NewChatButton';

export default function PrivateMessagesListScreen() {

  const navigation = useNavigation();

  const [chatRooms, setChatRooms] = React.useState([]);
  
  const [testchatRooms, settesChatRooms] = React.useState([]);

  React.useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
            id: userInfo.attributes.sub,
          }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();

    const fetchtestChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            listChatRooms, {
            id: userInfo.attributes.sub,
          }
          )
        )

        settesChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
        console.log(e);
      }
    }
    fetchtestChatRooms();

  }, []);
  console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);
console.log(`---------------before return testchatrooms in privmsgscrn------------------`);
console.log(testchatRooms);
console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);
console.log(`-------------------------------------------`);



  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="tomato" />
        </TouchableOpacity>
        <NewChatButton ></NewChatButton>
      </View>
      <View style={styles.chatsContainer}>
        {testchatRooms && <PrivateMessagesFeed chatRooms = {testchatRooms}/>}
        {testchatRooms.items? <Text> Start a chat</Text> : <View/>}
      </View>
    </View>

);
}





/*    
{testchatRooms &&
<FlatList
  style={{ width: '100%' }}
  data={testchatRooms}
  renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
  keyExtractor={(item) => item.id}
/>}




<PrivateMessagesFeed />
 
 
        <Post post ={posts[0]}/>
        <Post post ={posts[1]}/>
 
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.tsx" /> 
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 25,
    paddingBottom: 5,
    backgroundColor: '#e3e3e3',
  },
  backButton:{

  },
  chatsContainer:{
     width: '100%', 
  }
});