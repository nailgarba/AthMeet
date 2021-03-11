import React from 'react';
import {View, Text, Image} from 'react-native';
import { PostType } from '../../../types';


export type MainContainerProps = {
    post: PostType,
}
const MainContainer = ({post}: MainContainerProps) => (
    <View>
        <Text>POST TESTING</Text>
        <View>
            <Text>{post.user.name}</Text>
            <Text>{post.user.username}</Text>
            <Text>{post.postedAt}</Text>
        </View>

        <View>
            <Text>{post.content}</Text>
            {!!post.image && <Image source={{uri:post.image}}/>}
        </View>

        
        {/*username */}
        {/*content */}
        {/*footer */}
    </View>
)

export default MainContainer;