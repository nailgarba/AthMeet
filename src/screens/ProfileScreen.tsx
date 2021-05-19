import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {UserType} from '../types';
import Feed from '../components/Feed';
import ProfileScreenComponents from '../components/ProfileScreenComponents';
import TopContainer from '../components/ProfileScreenComponents/TopContainer';

import users from '../data/users';
import EditProfileButton from '../components/EditProfileButton';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../src/graphql/queries'; 

import myUser from '../data/myUser';
/*
export {UserType} from '../types';

export type PostProps = {
user: UserType,
}*/


export default function ProfileScreen() {
  
  
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
    console.log(user);
  }, [])


  /*
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
      
      
  
  }*/
  


  return (
    <View style={styles.container}>
      <EditProfileButton/>
      <ProfileScreenComponents user ={user} />
      
        
        
    </View>
    
  );
}
//<Feed />

//<Post post = {posts[2]}/>
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });