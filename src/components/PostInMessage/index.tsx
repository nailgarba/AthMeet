import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import { PostType } from '../../types';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import styles from './styles'
import { getPost } from '../../src/graphql/queries';

export { PostType } from '../../types'

export type PostProps = {
    post: PostType,
}
export default class PostInMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: props.postID,
            post: {},
            //post:props.post,
        }
        console.log(`----------------------`)
        console.log(`------postID---------`)
        console.log(props.postID)
        const fetchPost = async () => {
            try {
                const postData = await API.graphql(graphqlOperation(getPost,
                    { id: this.state.postID }));
                if (postData) {
                    this.setState({
                        post: postData.data.getPost
                    })
                    console.log(`----------------------`)
                    console.log(`------postdata---------`)
                    console.log(postData.data)
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchPost();

    }
    fetchPost = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(getPost,
                { id: this.state.postID }));
            if (postData) {
                this.setState({
                    post: postData.data.getPost
                })
                console.log(`----------------------`)
                console.log(`------postdata---------`)
                console.log(postData.data)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(){
        this.fetchPost();
    }

    render() {
        if (this.state.post&&this.state.post.user) {

            return (
                <View style={styles.container}>
                    <LeftContainer user={this.state.post.user} />
                    <MainContainer post={this.state.post} />
                </View>
            );
        }
        else return(
            <View></View>
        )
    }
}