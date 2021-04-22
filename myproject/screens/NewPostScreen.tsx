import * as React from 'react';
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

export default function NewPostScreen() {
    const [post, setPost] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");
    const navigation = useNavigation();

    const onPostPost = () => {
        console.warn("OnPostPost");
        console.log(`posting post: ${post} Image: ${imageURL}`)
    }
    



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={40} color="tomato" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onPostPost}>
                        <Text style={styles.buttonText}>POST</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.newPostContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={post}
                            onChangeText={(value) => setPost(value)}
                            multiline={true}
                            numberOfLines={3}
                            style={styles.postInput}
                            placeholder={"What's on your mind?"}
                        />
                        <TextInput
                            value={imageURL}
                            onChangeText={(value) => setImageURL(value)}
                            style={styles.imageInput}
                            placeholder={"Optional Image URL"}
                        />

                    </View>
                </View>

            </View>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: '100%',
        paddingRight: 15,

    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //padding: 15,
        marginTop: 25,
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
    backButton:  { 
      marginLeft: 15 ,  
    },
    inputContainer: {
        marginLeft: 10,
        width: '100%',
        
    },
    newPostContainer: {
        flexDirection: 'row',
        //padding: 15,
        //width: '100%',
    },
    postInput: {
        height: 100,
        maxHeight: 400,
        fontSize: 18
    },
    imageInput: {

    },
});
