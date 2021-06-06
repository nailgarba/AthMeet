import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { commentsByPost } from '../../src/graphql/queries';
import CommentPost from '../CommentPost';


const CommentsinComments = (comments) => {


    return (
        <View style={{ width: '100%' }}>
            {comments &&<FlatList
                data={comments.comments}
                renderItem={({ item }) =>  <CommentPost comment={item} />}
                keyExtractor={(item) => item.id}
            />}

        </View>
    )
}

export default CommentsinComments;
