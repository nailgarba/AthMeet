import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';


//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';


export default function SearchScreen() {

    const [searchValue, setSearchValue] = React.useState("");




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
            </View>
        </SafeAreaView>

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
  });