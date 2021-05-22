import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { UserType } from '../types';
import Feed from '../components/Feed';
import ProfileScreenComponents from '../components/ProfileScreenComponents';
import TopContainer from '../components/ProfileScreenComponents/TopContainer';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import users from '../data/users';
import EditProfileButton from '../components/EditProfileButton';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';

import myUser from '../data/myUser';
import { useNavigation } from '@react-navigation/native';
export {UserType} from '../types';



export type OtherProfileProps = {
  userID: string,
}


const OtherProfileScreen = () => {
  const [suser, setUser] = React.useState([]);
  const [tuser, setTUser] = React.useState([]);
  const route = useRoute();

  React.useEffect(() => {
     //get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id:  route.params.userID.id}))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
    console.log(suser);
  }, [])/**/

  const navigation = useNavigation();
 

  
  const checkDMS = () => {
    console.log(suser);
    console.warn(" route:");
    console.log(route);
    console.log(`route params: `);
    console.log(route.params);
    console.log(`route id: `);
    console.log(route.params.id);
    console.log(`route params userID: `);
    console.log(route.params.userID);
    console.log(`route params userID id: `);
    console.log(route.params.userID.id);    
    console.log(`suser: ${suser}  tuser: ${tuser}`);
    //check if chatroom exists if not create one user: ${userID}
  }



  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="tomato" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={checkDMS}>
          <Text style={styles.buttonText}>DM</Text>
        </TouchableOpacity>
      </View>
      <ProfileScreenComponents user={suser} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 15,
    marginTop: 25,
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 30,

  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  backButton: {
    marginLeft: 15,
  },
});

export default OtherProfileScreen;