import React from 'react';
import {View, Text, Image} from 'react-native';
import { UserType } from '../../../types';
import {Ionicons} from '@expo/vector-icons';
import  {StyleSheet} from 'react-native';




export type MainContainerProps = {
    user: UserType,
}
const MainContainer = ({user}: MainContainerProps) => (
    <View style= {styles.container}>
        <View style= {styles.postHeaderContainer}>
            <Text style={styles.name}>{user.name}</Text>
        </View>

        <View >
            <Text style= {styles.content}>{user.name}: Preview of the last message...</Text>
        </View>
    </View>
)

export default MainContainer;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
    },
    postHeaderContainer: {
        flexDirection: 'row',
    },
    name:{
        marginRight:5,
        fontWeight:'bold',
    },
    username: {
        marginRight:5,
        color: 'grey',
    },
    createdAt: {
        marginRight:5,
        color: 'grey',
    },
    content:{
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,
        color: 'grey',
    },
    image: {
        marginVertical: 5,
        width: "100%",
        height: 230,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
});