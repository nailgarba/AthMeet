import * as React from 'react';
import { FlatList,StyleSheet, SafeAreaView, TextInput  } from 'react-native';
import ProfilePost from '../components/ProfilePost';
import { listUsers }  from '../src/graphql/queries';

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
  const [searchValue, setSearchValue] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
      const fetchUsers = async () => {
          try {
              const followingData = await API.graphql(
                  graphqlOperation(
                      listUsers
                  )
              )
              setUsers(followingData.data.listUsers.items);
          } catch (e) {
              console.log(e);
          }
      }
      fetchUsers();
  }, [])





  return (
    <View style={styles.container}>
        <AthleteFinderFilterButton/>
        <FlatList
                        style={{ width: '100%' }}
                        data={users}
                        renderItem={({ item }) => <ProfilePost user={item} />}
                        keyExtractor={(item) => item.id}
                    />       
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });