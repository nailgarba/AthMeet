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

export default function AthleteFinderFilterScreen() {
    const [post, setPost] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");
    const navigation = useNavigation();

    const onSave = () => {
        console.warn("OnPostPost");
        console.log(`----------------Saving Changes to profile-------------`)
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={30} color="tomato" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onSave}>
                        <Text style={styles.buttonText}>SAVE CHANGES</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </SafeAreaView>


    );
}
/*
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
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15,
        marginTop: 25,
        paddingBottom: 5,
        backgroundColor: '#e3e3e3',
    },
    button: {
        backgroundColor: 'tomato',
        borderRadius: 30,
        alignSelf:'center',

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
    inputContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 100,
        paddingBottom: 10,
        width: '100%',

    },
    newPostContainer: {
        flexDirection: 'row',
        //padding: 15,
        //width: '100%',
    },
    postInput: {
        height: 30,
        maxHeight: 50,
        fontSize: 18,
        marginBottom: 30,
    },
    imageInput: {

    },
});
