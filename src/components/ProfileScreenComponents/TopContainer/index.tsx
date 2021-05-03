import React from 'react';
import { View, Text } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';
import { StyleSheet } from 'react-native';


export type TopContainerProps = {
    user: UserType,
}
const TopContainer = ({ user }: TopContainerProps) => (
    <View style={styles.container}>
        <View style={styles.profilePictureContainer}>
            <ProfilePicture image={user.image} size={200} />
        </View>
        <View style={{ margin:'auto' }}>
            <Text style={styles.nameContainer} >{user.name}</Text>
            <Text style={styles.usernameContainer}>@{user.username}</Text>
            <View style={styles.followsContainer}>
                <Text>Followers {user.followers}</Text>
                <Text>Following {user.following}</Text>
                <Text style={styles.content}>Main Gym: {user.mainGym}</Text>
                <Text style={styles.content}>Main Sport: {user.mainSport}</Text>
                <Text style={styles.content}>Level: {user.level}</Text>
            </View>
        </View>



    </View>
)

export default TopContainer;

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        flex: 1,
        marginTop: 15,
    },
    profilePictureContainer: {
        marginTop: 15,
    },
    followsContainer: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
    nameContainer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    usernameContainer: {
        fontSize: 16,
        color: 'gray',
    },
    content: {
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,

    },
});