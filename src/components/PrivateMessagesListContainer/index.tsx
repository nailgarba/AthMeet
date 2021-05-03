import React from 'react';
import {View, Text} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import {UserType} from '../../types';
import  {StyleSheet} from 'react-native';


export {UserType} from '../../types'

export type UserProps = {
user: UserType,
}
const PrivateMessagesListContainer = ({user}: UserProps) => (
    <View style= {styles.container}>
       <LeftContainer user={user}/>
       <MainContainer user={user}/> 
    </View>
)

export default PrivateMessagesListContainer;


const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        //padding: '15',
        borderBottomWidth: 1,
        borderColor: 'tomato',
    }
});
