import React from 'react';
import {View, Text} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

export {PostType} from '../../types'

export type PostProps = {
post: PostType,
}
const Post = ({post}: PostProps) => (
    <View>
       <LeftContainer user={post.user}/>
       <MainContainer post={post}/> 
    </View>
)

export default Post;