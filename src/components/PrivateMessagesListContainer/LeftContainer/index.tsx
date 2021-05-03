import React from 'react';
import {View, Text} from 'react-native';
import {UserType} from '../../../types';
import ProfilePicture from '../../ProfilePicture';
import  {StyleSheet} from 'react-native';


export type LeftContainerProps = {
    user: UserType,
}
const LeftContainer = ({user}: LeftContainerProps) => (
    <View>
            <ProfilePicture image ={user.image} size={75}/>
    </View>
)

export default LeftContainer;