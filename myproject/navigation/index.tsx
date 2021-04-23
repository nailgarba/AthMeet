import { NavigationContainer, DefaultTheme, DarkTheme,LightTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NewPostScreen from "../screens/NewPostScreen";
import HomeScreen from "../screens/HomeScreen";
import AthleteFinderFilterScreen from "../screens/AthleteFinderFilterScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PrivateMessagesListScreen from '../screens/PrivateMessagesListScreen';
import PrivateMessagesScreen from '../screens/PrivateMessagesScreen';

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
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
