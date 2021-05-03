import React from 'react';
import {View, Text} from 'react-native';
import { UserType } from '../../types';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

import styles from './styles';

export {ProfileType} from '../../types';

export type PostProps = {
post: ProfileType,
user: UserType,
}



const ProfilePost = ({post}: PostProps) => (
    <View style= {styles.container}>
       <LeftContainer user={post.user}/>
       <MainContainer post={post}/> 
    </View>
)

export default ProfilePost;