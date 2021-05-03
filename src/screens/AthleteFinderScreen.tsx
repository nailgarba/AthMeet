import * as React from 'react';
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import ProfileFeed from '../components/ProfileFeed';
import AthleteFinderFilterButton from "../components/AthleteFinderFilterButton";


export default function AthleteFinderScreen() {
  return (
    <View style={styles.container}>
        <AthleteFinderFilterButton/>
        <ProfileFeed />        
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