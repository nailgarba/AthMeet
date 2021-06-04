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
                            myUser: userInfo.data.getUser
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
            // await API.graphql(graphqlOperation(createFollow, { id: myID, followed}));
        } catch (e) {
            console.log(e);
        }
        this.setState({
            isFollowed: true
        });
    }


    unfollowUser = async () => {
        this.setState({
            isFollowed: false
        });
    }


    onClick = async () => {
        if (this.state.isFollowed) {
            this.unfollowUser();
        } else {
            this.followUser();
        }
    }

    render() {

        return (

            (<View >
                <TouchableOpacity style={styles.container} onPress={this.onClick}>
                    <SimpleLineIcons name={this.state.isFollowed ? "user-following" : "user-follow"} size={30} color={!this.state.isFollowed ? 'white' : 'white'} />
                </TouchableOpacity>
            </View>)
        )


    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "tomato",
        borderRadius: 9,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        //  margin: 'auto',
        //   flex: 1,
        marginTop: 5,
    },
})