import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createPost } from '../src/graphql/mutations';



export default function NewPostScreen() {
    const [post, setPost] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");
    const navigation = useNavigation();

    const onPostPost = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const newPost = {
                content: post,
                image: imageURL,
                userID: currentUser.attributes.sub,
            }
            console.log(`Created newPost object: ${newPost.content} ${newPost.image}${newPost.userID}`);

            await API.graphql(graphqlOperation(createPost, { input: newPost }));
            navigation.goBack();
        } catch (e) {
            console.log(`caught an error in try catch L37 NewPostScreen`);
            console.log(e);
        }
        console.warn(`OnPostPost`);
        console.log(`posting post: ${post} Image: ${imageURL}`);
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={40} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPostPost}>
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newPostContainer}>
                <View style={styles.postInputContainer}>

                <TextInput
                    value={post}
                    onChangeText={(value) => setPost(value)}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.postInput}
                    placeholder={"What's on your mind?"}
                    />
                </View>
                <View style={styles.imageInputContainer}>

                <TextInput
                    value={imageURL}
                    onChangeText={(value) => setImageURL(value)}
                    style={styles.imageInput}
                    placeholder={"Optional Image URL"}
                    />
                </View>

            </View>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',

    },
    headerContainer: {
        //width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15,
        marginTop: 25,
        paddingBottom: 5,
        backgroundColor: '#e3e3e3',
    },
    newPostContainer: {
        flexDirection: 'column',
        //padding: 15,
        //width: '100%',
        minHeight: '40%',
        padding: 'auto',
        justifyContent:"space-between",

    },
    postInputContainer: {
        marginLeft: 10,
        width: '100%',

    },
    imageInputContainer: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: 'tomato',
        borderRadius: 30,

    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    backButton: {
        marginLeft: 15,
    },
    postInput: {
        height: 100,
        maxHeight: 400,
        fontSize: 18
    },
    imageInput: {
        height: 100,
        maxHeight: 400,
        fontSize: 18
    },
});
