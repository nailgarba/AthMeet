import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import { Auth } from 'aws-amplify';

const SignOutButton = () => {

    const navigation = useNavigation();

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={signOut}
        >
            <Octicons name={"sign-out"} size={30} color='tomato'></Octicons>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {

    }
});
export default SignOutButton;