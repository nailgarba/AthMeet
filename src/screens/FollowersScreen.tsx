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
import {getFollowers} from '../customgraphql/queries';

export default function FollowersScreen() {



    const route = useRoute();
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const followersData = await API.graphql(
                    graphqlOperation(
                        getFollowers,  {id: "4c1fbfb4-f87e-4384-bda3-0c3be1272868"}
                    )
                )
                setUsers(followersData.getUser.data.followers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={40} color="tomato" />
                </TouchableOpacity>
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
