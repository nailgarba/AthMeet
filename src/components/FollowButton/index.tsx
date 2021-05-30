import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API, graphqlOperation, Auth, input } from 'aws-amplify';
import { SimpleLineIcons, } from "@expo/vector-icons";
import { createFollow } from '../../src/graphql/mutations';
import { getUser } from '../../src/graphql/queries';

export default class FollowButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFollowed: false,
            userID: props.id,
            myID: "",
            isMe: true,
            myUser: [],
            otherUser: [],
        }
        const getMyInfo = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();
                if (userInfo) {
                    this.setState({
                        myId: userInfo.attributes.sub
                    });
                    const myUser = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
                    if (myUser) {
                        this.setState({
                            otherUser: userInfo.data.getUser
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }
        getMyInfo();
        const getOtherUserInfo = async () => {
            try {
                if (this.state.userID) {
                    const userInfo = await API.graphql(graphqlOperation(getUser, { id: this.state.userID }));
                    if (userInfo) {
                        this.setState({
                            otherUser: userInfo.data.getUser
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }

        }
        getOtherUserInfo();















        const checkIfFollowed = async () => {
            try {
                const followers = await API.graphql(graphqlOperation());
                if (!this.state.myID == this.state.userID) {
                    this.setState({
                        isMe: false
                    })
                }
            } catch (e) {
                console.log(e);
            }
            const followed = await API.graphql(graphqlOperation(getUser));


        }


    }
    checkIfFollowed() {

    }

    followUser = async () => {
        try {
            const myUser = await API.graphql(graphqlOperation(getUser, { id: this.state.myID }));
            const followed = await API.graphql(graphqlOperation(getUser, { id: this.state.userID }));
            await API.graphql(graphqlOperation(createFollow, { id: userInfo.data }));
        } catch (e) {
            console.log(e);
        }
        this.setState({
            isFollowed: true
        });
    }


    unfollowUser = async () => {
    }






    onClick = async () => {
        if (this.state.isFollowed) {
            this.unfollowUser();
        } else {
            this.followUser();
        }
    }

    render() {

        if (!this.state.isMe) {
            return (

                (<View style={styles.container}>
                    <TouchableOpacity onPress={this.onClick}>
                        <SimpleLineIcons name={this.state.isFollowed ? "user-following" : "user-follow"} size={20} color={!this.state.isFollowed ? 'grey' : 'tomato'} />
                    </TouchableOpacity>
                </View>)
            )
        }
        else return (<View />)
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 'auto',
        flex: 1,
        marginTop: 5,
    },
})