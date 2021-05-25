import React from 'react';
import {View, Text} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import { PostType } from '../../types';

import styles from './styles'

//export {PostType} from '../../types'

export type PostProps = {
postt: PostType,
}
const PostInComments = (post) =>{
   /* console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    console.log(`----------Post in postincommentscreen-------------`);
    console.log(post);
    console.log(`------------------------------`);
    console.log(`------------------------------`);
*/

    return (
    <View style= {styles.container}>
        <MainContainer post={post.post}/> 

    </View>
)
}

//<LeftContainer user={post.user}/>
export default PostInComments;