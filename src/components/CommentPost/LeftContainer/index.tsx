import React from 'react';
import {View, Text} from 'react-native';
import {UserType} from '../../../types';
import ProfilePicture from '../../ProfilePicture';


export type LeftContainerProps = {
    user: UserType,
}
const LeftContainer = ({user}: LeftContainerProps) => (
    <View style={{margin:2}}>
            <ProfilePicture user ={user} size={40}/>
    </View>
)

export default LeftContainer;