import * as React from 'react';
import {FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { View } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import ContactListItem from '../components/ProfilePost';
//import users from '../../data/users';
import { listUsers }  from '../src/graphql/queries';
import {useEffect, useState} from "react";

export default function NewChatContactsScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="tomato" />
        </TouchableOpacity>
        </View>
      <FlatList
        style={{width: '100%'}}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
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
  },headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 15,
    marginTop: 25,
    paddingBottom: 5
  },
  backButton:{
    
  }
});
