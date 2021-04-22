import * as React from 'react';
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserType from '../types';
import Feed from '../components/Feed';
import ProfileScreenComponents from '../components/ProfileScreenComponents';
import TopContainer from '../components/ProfileScreenComponents/TopContainer';

import users from '../data/users';


export {UserType} from '../types';

export type PostProps = {
user: UserType,
}
export default function ProfileScreen() {
  
  return (
    <View style={styles.container}>
        <ProfileScreenComponents user ={users[0].user} />
        
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