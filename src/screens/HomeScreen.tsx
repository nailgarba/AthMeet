import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Feed />
        <NewPostButton/>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    paddingRight: 15,

},
});
