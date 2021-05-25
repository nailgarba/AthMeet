import React from 'react';
import {View, Text} from 'react-native';
import {UserType} from '../../../types';
import ProfilePicture from '../../ProfilePicture';


export type LeftContainerProps = {
    user: UserType,
}
const LeftContainer = ({user}: LeftContainerProps) => (
    <View>
            <ProfilePicture user ={user} size={50}/>
    </View>
)

export default LeftContainer;