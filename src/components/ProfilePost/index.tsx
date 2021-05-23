import React from 'react';
import {View, Text} from 'react-native';
import { UserType } from '../../types';
import GoToChatButton from '../GoToChatButton';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

import styles from './styles';

export {ProfileType} from '../../types';

export type ProfilePostProps = {

user: UserType,
}



const ProfilePost = ({user}: ProfilePostProps) => (
    <View style= {styles.container}>
       <LeftContainer user={user}/>
       <MainContainer user={user}/> 
       <View style= {styles.goToChatButton}>
       <GoToChatButton user={user}/>
       </View>
    </View>
)

export default ProfilePost;