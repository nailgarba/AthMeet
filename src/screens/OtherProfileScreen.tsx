import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

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
import GoToChatButton from '../components/GoToChatButton';
import SecondFeed from '../components/SecondFeed';
import BackButton from '../components/BackButton';
export { UserType } from '../types';



export type OtherProfileProps = {
  userID: string,
}


const OtherProfileScreen = () => {
  const [user, setUser] = React.useState([]);
  const [tuser, setTUser] = React.useState([]);
  const [isSelf, setisSelf] = React.useState(true);
  var testfalse = false;
  var testtrue = true;
  const route = useRoute();


  React.useEffect(() => {
    //get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id: route.params.userID.id }))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);

      }
    }
    fetchUser();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton/>
        {!testfalse
          ? <GoToChatButton user={user} />
          : <View />}
      </View>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.profileInfo}>
            {user.id && <ProfileScreenComponents user={user} showFollowButton={true} />}
          </View>
          <View style={styles.profileFeed}>
            {user.id && <SecondFeed id={user.id} />}
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    //width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 25,
    paddingBottom: 5,
    backgroundColor: '#e3e3e3',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },
  profileInfo: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'tomato'
    //  margin:'auto',

  },
  profileFeed: {
    borderTopWidth: 2,
    borderBottomWidth: 1,
    paddingTop: 10,
    borderColor: 'tomato'
    // margin:'auto',

  },
  backButton: {
    marginLeft: 15,
  },
});

export default OtherProfileScreen;