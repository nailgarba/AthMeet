import { NavigationContainer, DefaultTheme, DarkTheme,LightTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NewPostScreen from "../screens/NewPostScreen";
import HomeScreen from "../screens/HomeScreen";
import AthleteFinderScreen from "../screens/AthleteFinderScreen";
import AthleteFinderFilterScreen from "../screens/AthleteFinderFilterScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PrivateMessagesListScreen from '../screens/PrivateMessagesListScreen';
import PrivateMessagesScreen from '../screens/PrivateMessagesScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import {MaterialCommunityIcons,} from '@expo/vector-icons';
import NewChatContactsScreen from '../screens/NewChatContactsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FollowersScreen from '../screens/FollowersScreen';
import PostSendScreen from '../screens/PostSendScreen';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? LightTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
//theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>



// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name ="NewPost" component={NewPostScreen} />      
      <Stack.Screen name ="Home" component={HomeScreen} />     
      <Stack.Screen name ="PrivateMessages" component={PrivateMessagesScreen} />
      <Stack.Screen name ="PrivateMessagesList" component={PrivateMessagesListScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    
      <Stack.Screen name ="AthleteFinderFilter" component={AthleteFinderFilterScreen} />   
      <Stack.Screen name="OtherProfile" component={OtherProfileScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />   
      <Stack.Screen name="Following" component={FollowingScreen} />   
      <Stack.Screen name="Followers" component={FollowersScreen} />   
      <Stack.Screen name="NewChatContacts" component={NewChatContactsScreen} />   
      <Stack.Screen name="PostSend" component={PostSendScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Comments" component={CommentsScreen} 
      options={({ route })  => ({})}/>  
      <Stack.Screen name ="ChatRoom" component={ChatRoomScreen} 
      options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })} />
    </Stack.Navigator>
  );
}
