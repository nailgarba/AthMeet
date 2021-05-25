import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import { API, Auth, graphqlOperation, } from 'aws-amplify';
import { createComment, } from '../../src/graphql/mutations';
import { MaterialIcons, Ionicons, Entypo, Fontisto, } from '@expo/vector-icons';




const SearchInputBox = (props) => {



    const [searchValue, setSearchValue] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextInput
                    placeholder={"Enter a username"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
            </View>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.buttonContainer}>
                    <Ionicons name="search" size={28} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )

}
export default SearchInputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 10,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        marginRight: 10,
        padding: 10,
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
    }
})