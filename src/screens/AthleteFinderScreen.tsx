import * as React from 'react';
import { FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import ProfilePost from '../components/ProfilePost';
import { listUsers, getUser } from '../src/graphql/queries';

import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import ProfileFeed from '../components/ProfileFeed';
import AthleteFinderFilterButton from "../components/AthleteFinderFilterButton";


export default function AthleteFinderScreen() {
  const navigation = useNavigation();
  const [mainGym, setMainGym] = React.useState("");
  const [mainSport, setMainSport] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [user,setUser]=React.useState([]);

  React.useEffect(() => {

    const fetchMyUser = async () => {
    
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }
      
      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id:  userInfo.attributes.sub }))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------user in fetchMyUser---------------------------`);
      console.log(user);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
    }
    fetchMyUser();
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------user after fetchMyUser---------------------------`);
    console.log(user);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    console.log(`-------------------------------------------`);
    if (!user) {
      return;
    }
    const fetchUsers = async () => {
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------user.mainGym  after fetchMyUser---------------------------`);
      console.log(user.mainGym );
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      console.log(`-------------user.mainSport  after fetchMyUser---------------------------`);
      console.log(user.mainSport );
      console.log(`-------------------------------------------`);
      console.log(`-------------------------------------------`);
      try {
      const followingData = await API.graphql(
        graphqlOperation(
          listUsers, {
            filter: {
                mainGym: { contains: mainGym },
                mainSport: {contains: mainSport },
                level: {contains: level }
                }
          }
          
            )
            );
            
        setUsers(followingData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, [])


  const fetchUsers = async () => {
    try {
      const followingData = await API.graphql(
        graphqlOperation(
          listUsers, {
          filter: {
              mainGym: { contains: mainGym },
              mainSport: {contains: mainSport},
              level: {contains: level},
              }
          }
      
      )
      );
      setUsers(followingData.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
  }





  return (
    <View style={styles.container}>
      <AthleteFinderFilterButton props ={fetchUsers} />
      <View>
        <FlatList
          style={{ width: '100%' }}
          data={users}
          renderItem={({ item }) => <ProfilePost user={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:5,
    alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
  },
});