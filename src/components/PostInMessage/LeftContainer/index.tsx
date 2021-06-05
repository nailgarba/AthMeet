import React from 'react';
import {View, Text} from 'react-native';
import {UserType} from '../../../types';
import ProfilePicture from '../../ProfilePicture';


export type LeftContainerProps = {
    user: UserType,
}
const LeftContainer = ({user}: LeftContainerProps) => (
    <View style={{margin:4}}>
            <ProfilePicture user ={user} size={65}/>
    </View>
)

export default LeftContainer;