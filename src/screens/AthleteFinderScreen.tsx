import * as React from 'react';
import { FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import ProfilePost from '../components/ProfilePost';
import { listUsers, getUser } from '../src/graphql/queries';

import { useNavigation, useRoute } from '@react-navigation/native';
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
  const [user, setUser] = React.useState([]);
  const route = useRoute();
  React.useEffect(() => {

    const fetchMyUser = async () => {

      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchMyUser();
    if (!user) {
      return;
    }
    const fetchUsers = async () => {
      try {
        const followingData = await API.graphql(
          graphqlOperation(
            listUsers, {
            filter: {
              mainGym: { contains: mainGym },
              mainSport: { contains: mainSport },
              level: { contains: level }
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

  //Fetch new users list to be passed to filter component
  const fetchUsers = async () => {
    try {
      const followingData = await API.graphql(
        graphqlOperation(
          listUsers, {
          filter: {
            mainGym: { contains: mainGym },
            mainSport: { contains: mainSport },
            level: { contains: level },
          }
        }

        )
      );
      setUsers(followingData.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
  }
  const setFilterSettings = (filter) => {
    setMainGym(filter.mainGym);
    setMainSport(filter.mainSport);
    setLevel(filter.level);
  }

  React.useEffect(() => {
    const result = route.params?.filter;
    console.log(`---------------------------`)
    console.log(`---------------------------`)
    console.log(`-----------result-----------`)
    console.log( result)
    if(result){
      setFilterSettings(result);
      fetchUsers();
    }
  },[])
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const result = route.params;
    console.log(`---------------------------`)
    console.log(`---------------------------`)
    console.log(`-----------result-----------`)
    console.log( result)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);





  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ width: '100%' }}
          data={users}
          renderItem={({ item }) => <ProfilePost user={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <AthleteFinderFilterButton props={setFilterSettings} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});