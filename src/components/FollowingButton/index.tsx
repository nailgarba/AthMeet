import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


const FollowingButton = (props) => {

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('Following', {
          id: props.id,
        })
      }

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <Text style={styles.followsTexts}>Following</Text>
            </TouchableOpacity>
        </View>


    )

}
export default FollowingButton;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 'auto',
        flex: 1,
        marginTop: 5,
    },
    followsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 6,
        marginBottom:6,
        fontSize: 20,
    },
    followsTexts: {
        fontWeight: 'bold',
        marginVertical: 4,
        marginLeft:10,
        marginRight:10,
        fontSize: 20,
       //lineHeight: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
})