import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Platform, Image, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons, } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { createPost } from '../src/graphql/mutations';
import BackButton from '../components/BackButton';
import * as ImagePicker from 'expo-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import { decode as atob, encode as btoa } from 'base-64';
import {uploadImageToS3} from '../customgraphql/uploadImage';
import moment from 'moment';



export default function NewPostScreen() {
    const [post, setPost] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");
    const [signedImageURL, setSignedImageURL] = React.useState("");
    
    var binaryImage;
    const navigation = useNavigation();



    //Upload post to database
    const onPostPost = async () => {
        var image;
        if (!!imageURL) {
            image = await uploadImage();
        }
        try {
            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const newPost = {
                content: post,
                image: image,
                userID: currentUser.attributes.sub,
            }
            console.log(`Created newPost object: ${newPost.content}${newPost.userID}`);

            await API.graphql(graphqlOperation(createPost, { input: newPost }));
            navigation.goBack();
        } catch (e) {
            console.log(e);
        }
    };

    //Request permission to access camera roll
    const getPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please accept camera roll permissions');
            }
        }
    }

    useEffect(() => {
        getPermission()
    }, [])


    //Select image from phone library
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImageURL(result.uri);
              //  binaryImage= convertDataURIToBinary(result.uri)
            }
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };

    /*
    const convertImageToBaseSixFour = (url) => {

        ImgToBase64.getBase64String(url)
            .then((base64String) => {
                baseStringSample = base64String,
            })
            .catch(err => Alert.alert('Error' + err));

    }*/


    // ****** CONVERT BASE64 TO BLOB ******* //

    const imageToBlob=(baseStringSample)=>{

        var byteCharacters = atob(baseStringSample);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
            byteArray = new Uint8Array(byteNumbers);
            console.log("BYTEARRAY: " + byteArray);
        }

    }
    

    
    var BASE64_MARKER = ';base64,';
    function convertDataURIToBinary(dataURI) {
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    //Generate unique key from current date, random numbers, and image URL
    const generateKey=(url)=>{
        const date=moment().format("YYYYMMDD");
        const randomString = Math.random().toString(36).substring(2,7);
        const fileName= url.toLowerCase().replace(/[^a-z0-9]/g,"-");
        const newFileName = `${date}-${randomString}-${fileName}`;
        return newFileName.substring(0,60);
    }



    //Upload image to Amazon S3 and return uploaded image's address
    const uploadImage = async () => {
        
        try {
            const response = await fetch(imageURL);
            const blob = await response.blob();
            const urlParts = imageURL.split('.');
            const extension = urlParts[urlParts.length - 1];
            const key = generateKey(imageURL);
            await Storage.put(key, blob,{
                contentType: 'image/jpeg', // contentType is optional
              });
            console.log(key);
              return key;

        } catch (e) {
            console.log(`Error caught in upload image`);
            console.log(e);
        }
        return '';
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton />
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
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageURL }} style={styles.image} />
                </View>
                <View style={styles.imageInputContainer} >

                    <TouchableOpacity onPress={pickImage}>
                        <Text style={styles.pickImage}>Upload image</Text>
                    </TouchableOpacity>
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

    },
    postInputContainer: {
        margin: 10,
        marginHorizontal: 15,
        width: '100%',
        height: "50%",
        borderRadius: 5,

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
        fontSize: 18,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
    },
    pickImage: {
        fontSize: 18,
        color: 'black',
        margin: 10,
        padding: 5,
        width: "auto",
        alignSelf: "center",
        alignContent: "center",
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#c7c7c7"
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5,
    },
    imageContainer: {
        margin: 15,
        alignSelf: "center"
    }
});


