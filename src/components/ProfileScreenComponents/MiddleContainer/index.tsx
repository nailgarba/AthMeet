import React from 'react';
import { View, Text } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';
import { StyleSheet } from 'react-native';
import PrivateFeed from '../../PrivateFeed';


export type MiddleContainerProps = {
    user: UserType,
}
const MiddleContainer = ({ user }: MiddleContainerProps) => (
    <View style={styles.container}>
        <PrivateFeed user={user}/>
    </View>
    
)
//
export default MiddleContainer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    postHeaderContainer: {
        flexDirection: 'row',
    },
    name:{
        marginRight:5,
        fontWeight:'bold',
    },
    username: {
        marginRight:5,
        color: 'grey',
    },
    content:{
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,

    },
});