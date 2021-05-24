import React from 'react';
import {View, Text, FlatList} from 'react-native';
import  {StyleSheet} from 'react-native';
import {UserType} from '../../types';
import TopContainer from './TopContainer';
//import BottomContainer from './BottomContainer';
import MiddleContainer from './MiddleContainer';
import users from '../../data/users';
import Feed from '../Feed';

export {UserType} from '../../types';


export type UserProps = {
    user: UserType,
}

const ProfileScreenComponents = ({user}: UserProps) => {
    console.log(`----------------------------------------------------`);
            console.log(`------------------ProfileScreenComponents----------------------`);
            console.log(`-------------------user id-------------------`);
            console.log(`----------------------------------------------------`);
            console.log(user.id);
            console.log(`----------------------------------------------------`);
    

    return (
    <View style ={styles.container}>
        <View style={styles.topContainer}>
        <TopContainer user={user}/>        
        </View>
        <View style={styles.middleContainer}>
        <MiddleContainer  user={user}/>
        </View>
        
    </View>

)}
//<Feed/>
export default ProfileScreenComponents;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        margin:'auto',
        justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        margin:'auto',
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    middleContainer: {
        flex: 1,
        margin:'auto',
        justifyContent: 'center',
    },
   
});


/*

        <BottomContainer user={user}/>
        */



/*
<View style ={{width: '100%'}}>
        <FlatList
            data = {posts}
            renderItem={({item}) => <Post post = {item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
*/