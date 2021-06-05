import React, {Component, useEffect } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {UserType} from '../types';
import Feed from '../components/Feed';
import ProfileScreenComponents from '../components/ProfileScreenComponents';
import TopContainer from '../components/ProfileScreenComponents/TopContainer';
import { useRoute ,useNavigation} from '@react-navigation/native';
import users from '../data/users';
import EditProfileButton from '../components/EditProfileButton';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../src/graphql/queries'; 

import myUser from '../data/myUser';
import SecondFeed from '../components/SecondFeed';


export default function ProfileScreen() {
  
  
  const route = useRoute();
  const [user,setUser]=React.useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation= useNavigation();
  
  const [focusListener, setFocusListener] = React.useState("");
  
  React.useEffect(() => {
    // get the current user
    const fetchUser = async () => {
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
    }
    fetchUser();
    //forceUpdate();
  }, [])
  
  const fetchUser = async () => {
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
  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    
    });
    return unsubscribe;
  }, [navigation]);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchUser().then(() => setRefreshing(false));
  }, []);
  

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ScrollView  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={styles.profileInfo}>
        {user.id && <ProfileScreenComponents user={user} />}
      </View>
      <View style={styles.profileFeed}>
       {user.id && <SecondFeed id={user.id} />}
      </View>
        </ScrollView>
      </View>
      <EditProfileButton/>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    },
    headerContainer: {
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
      alignItems:'center',
      borderTopWidth:1,
      borderBottomWidth:0,
      borderColor:'tomato'
      //  margin:'auto',
  
    },
    profileFeed: {
      borderTopWidth:2,
      borderBottomWidth:1,
      paddingTop:10,
      borderColor:'tomato'
      // margin:'auto',
  
    },
    backButton: {
      marginLeft: 15,
    },
  });


  /*
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {UserType} from '../types';
import Feed from '../components/Feed';
import ProfileScreenComponents from '../components/ProfileScreenComponents';
import TopContainer from '../components/ProfileScreenComponents/TopContainer';

import { useRoute } from '@react-navigation/native';
import users from '../data/users';
import EditProfileButton from '../components/EditProfileButton';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../src/graphql/queries'; 

import myUser from '../data/myUser';
import SecondFeed from '../components/SecondFeed';
/*
export {UserType} from '../types';

export type PostProps = {
user: UserType,
}//


export default function ProfileScreen() {
  
  
  const route = useRoute();
  const [user,setUser]=React.useState([]);

  React.useEffect(() => {
    // get the current user
    const fetchUser = async () => {
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
    }
    fetchUser();
    //console.log(user);
  }, [])


  ///*
  thisUser = {
    
      
          id:'u1',
          username: user.username,
          name:'Nail Garba',
          mainGym: 'NR1 Fitness',
          mainSport:'Bodybuilding',
          level: 'Advanced',
          following: 391,
          followers: 234,
          image:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
      
      
  
  }// * /
  


  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ScrollView>


          <View style={styles.profileInfo}>

            {user.id && <ProfileScreenComponents user={user} />}
          </View>
          <View style={styles.profileFeed}>
            {user.id && <SecondFeed id={user.id} />}
          </View>
        </ScrollView>
      </View>
      <EditProfileButton/>

    </View>
    
  );
}
//<Feed />

//<Post post = {posts[2]}/>
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
      alignItems:'center',
      borderTopWidth:1,
      borderBottomWidth:0,
      borderColor:'tomato'
      //  margin:'auto',
  
    },
    profileFeed: {
      borderTopWidth:2,
      borderBottomWidth:1,
      paddingTop:10,
      borderColor:'tomato'
      // margin:'auto',
  
    },
    backButton: {
      marginLeft: 15,
    },
  });



  */