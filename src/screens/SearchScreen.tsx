import * as React from 'react';
import { FlatList,StyleSheet, SafeAreaView, TextInput } from 'react-native';

import ProfilePost from '../components/ProfilePost';

import { useNavigation } from '@react-navigation/native';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import { listUsers }  from '../src/graphql/queries';

import { API, graphqlOperation, Auth } from 'aws-amplify';


export default function SearchScreen() {

    const navigation = useNavigation();
    const [searchValue, setSearchValue] = React.useState("");
    const [posts, setPosts] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
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
}

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