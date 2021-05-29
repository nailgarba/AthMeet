import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { View } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import ProfilePost from '../components/ProfilePost';
//import users from '../../data/users';
import { listUsers } from '../src/graphql/queries';
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import BackButton from '../components/BackButton';

export default function FollowingScreen() {



    const route = useRoute();
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const followingData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(followingData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton/>
            </View>
            <FlatList
                style={styles.flatList}
                data={users}
                renderItem={({ item }) => <ProfilePost user={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 25,
        marginBottom: 0,
        paddingBottom: 5,
        backgroundColor: '#e3e3e3',
    },
    backButton: {


    },
    flatList: {
        width: '100%',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'tomato',
    }
});
