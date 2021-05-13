import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import AMPLIFY_CONFIG from './aws-exports';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
import { CreateUserInput } from './src/API';

Amplify.configure(AMPLIFY_CONFIG)
API.configure(AMPLIFY_CONFIG)



function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  const getRandomImage = ()=>{
    return 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
  }

  const saveUserToDB = async (user:CreateUserInput) =>{
    console.log(user);
    await API.graphql(graphqlOperation(createUser, {input: user}))
  }


/*
  useEffect( () =>{
    const updateUser = async () =>{
      //get current user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
      console.log(userInfo);

      //check if user exists in database
      if(userInfo){
        const userData = await API.graphql(graphqlOperation(getUser, {id:userInfo.attributes.sub}));
        console.log(userData)

        //if not, create user
        if(!userData.data.getUser){
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.name,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user);
        } else{
          console.log('User exists already');
        }
      }
    }
    updateUser();
  },  [])*/


  useEffect(() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if(userInfo) {
        // Check if user already exists in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
        console.log(userData)
        if(!userData.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          }
          await saveUserToDB(user);
        } else {
          console.log('User already exists');
        }
      }


      // If it doesn't, create the user in the database
    }
    updateUser();
  }, [])



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);