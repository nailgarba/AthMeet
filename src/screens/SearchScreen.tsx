import * as React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';

import ProfilePost from '../components/ProfilePost';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import { listUsers } from '../src/graphql/queries';

import { API, graphqlOperation, Auth } from 'aws-amplify';


export default function SearchScreen() {

    const navigation = useNavigation();
    const [searchValue, setSearchValue] = React.useState("");
    const [posts, setPosts] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
    }, [])
    const fetchUsers = async () => {
        try {
            const followingData = await API.graphql(
                graphqlOperation(
                    listUsers, {
                    filter: {
                        name: { contains: searchValue },
                    }
                }

                )
            )
            setUsers(followingData.data.listUsers.items);
        } catch (e) {
            console.log(e);
        }
    }
    fetchUsers();


    const onSendPress = () => {
        console.log(`-----------------------------`);
        fetchUsers();

    }


    return (

        <SafeAreaView style={styles.container}>
            
                <View style={styles.searchContainer}>
                    <TextInput
                        value={searchValue}
                        onChangeText={(value) => setSearchValue(value)}
                        multiline={false}
                        numberOfLines={1}
                        style={styles.searchInput}
                        placeholder={"Enter a username"}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={onSendPress}>
                        <Ionicons name="search" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.resultsContainer}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={users}
                        renderItem={({ item }) => <ProfilePost user={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>

        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        //width: '100%',
        //height: '100%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,

    },
    searchContainer: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        //width: '100%',
        height:'10%',
    },
    searchInput: {
        
        fontSize: 18,
        width: '85%',
    },
    resultsContainer: {
        flex: 1,

    },
    buttonContainer: {
        width: '15%',
        //height: 35,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
});

/*
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputContainer: {
        marginLeft: 10,
        width: '100%',
        paddingRight: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        //padding: 15,
        width: '100%',
    },
    searchInput: {
        height: 35,
        maxHeight: 400,
        fontSize: 18,
        width: '100%',
    },
    resultsContainer: {
        flex:1,

    }
});
*/


/* return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={searchValue}
                            onChangeText={(value) => setSearchValue(value)}
                            multiline={false}
                            numberOfLines={1}
                            style={styles.searchInput}
                            placeholder={"Enter a username"}
                        />
                    </View>
                </View>
                <View style={styles.resultsContainer}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={users}
                        renderItem={({ item }) => <ProfilePost user={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>

            </View>
        </SafeAreaView >

                );

                */