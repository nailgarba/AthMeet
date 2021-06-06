import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import { API, Auth, graphqlOperation, } from 'aws-amplify';
import { createComment, } from '../../src/graphql/mutations';
import { MaterialIcons, Ionicons, Entypo, Fontisto, } from '@expo/vector-icons';




const CommentInputBox = (props) => {

    const post  = props;
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
    
    React.useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const onSendPress = async () => {
        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createComment, {
                    input: {
                        content: message,
                        userID: myUserId,
                        postID: props.props.id,
                    }
                })
            )
        } catch (e) {
            console.log(e);
        }
        setMessage('');
    }
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
            style={{ width: '100%' }}
        >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <TextInput
                        placeholder={"Write a comment"}
                        style={styles.textInput}
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                </View>
                <TouchableOpacity onPress={onSendPress}>
                    <View style={styles.buttonContainer}>
                        <Ionicons name="md-send" size={28} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default CommentInputBox;

const styles = StyleSheet.create({
    container: {
       // flexDirection: 'row',
       // alignItems: 'flex-end',
       // margin: 10,
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        padding:3,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        marginRight: 10,
        padding: 10,
        paddingRight:15,
        borderRadius: 25,
    },
    textInput: {
        marginHorizontal: 10,
        flex: 1,
    },
    buttonContainer: {
        width: 45,
        height: 45,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin:2,
    }
})