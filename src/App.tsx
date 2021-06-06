import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import AMPLIFY_CONFIG from './aws-exports';
import { getUser } from './src/graphql/queries';
import { createFollow, createUser } from './src/graphql/mutations';
import { CreateFollowInput, CreateUserInput } from './src/API';

//Amplify.configure(AMPLIFY_CONFIG)

//Configure amplify, disable analytics to prevent analytics errors
Amplify.configure({
  ...AMPLIFY_CONFIG,
  Analytics: {
    disabled: true,
  },
  Storage: {
    AWSS3: {
        bucket: '', //REQUIRED -  Amazon S3 bucket name
        region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
    }
}
});


Amplify.configure({
  Auth: {
      userPoolRegion: "eu-west-1" ,
      identityPoolId: 'eu-west-1:413fbe6f-ded3-4951-acc9-57b4b4f7e853', //REQUIRED - Amazon Cognito Identity Pool ID
      region: 'eu-west-1', // REQUIRED - Amazon Cognito Region
      userPoolId: 'eu-west-1_QXwbDnmkF', //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: 'ir0ej2lrlh6533o3pcs1r5urf', //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
      AWSS3: {
          bucket: 'athmeets3bucket184241-dev', //REQUIRED -  Amazon S3 bucket name
          region: 'eu-west-1', //OPTIONAL -  Amazon service region
      }
  }
});
API.configure(AMPLIFY_CONFIG)



function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  //Upload user and follow to tables in database
  const saveUserToDB = async (user: CreateUserInput) => {
    await API.graphql(graphqlOperation(createUser, { input: user }))
  }
  const saveFollowToDB = async (follow: CreateFollowInput) => {
    await API.graphql(graphqlOperation(createFollow, { input: follow }))
  }
  useEffect(() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!!userInfo) {// Check if user already exists in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
        var followID = 'follow';
        if (!userData.getUser) {//Create FollowID with user's userID to store followers and users being followed
          followID= followID.concat(userInfo.attributes.sub);
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: 'public/defaultprofilepicture.jpg',
            followInfoID: followID,
          }
          await saveUserToDB(user);
          const follow = {
            id: followID,
            userID: userInfo.attributes.sub,
          }
          await saveFollowToDB(follow);
        } else {
          console.log('User already exists');
        }
      }
    } // If it doesn't, create the user in the database
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