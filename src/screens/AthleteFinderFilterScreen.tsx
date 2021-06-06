import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput, } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import { API, Auth, graphqlOperation } from 'aws-amplify';
//import {createPost} from '../src/graphql/mutations';
import { } from '../src/graphql/queries';
import BackButton from '../components/BackButton';


export default function AthleteFinderFilterScreen() {
    const navigation = useNavigation();
    const placeholder = {
        label: 'Select level of experience',
        value: null,
    };
    // main gym (custom option?), main sport
    const [mainGym, setMainGym] = React.useState("");
    const [mainSport, setMainSport] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [profiles, setProfiles] = React.useState([]);

    const onSave = async () => {/*
        console.warn("OnPostPost");
        console.log(`posting post: ${post} Image: ${imageURL}`);

        try {
            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const newPost = {
                content: post,
                image: imageURL,
                userID: currentUser.attributes.sub,
            }
            console.log(`Changed filter settings: ${mainGym} ${mainSport}${level}`);

            await API.graphql(graphqlOperation(createPost, { input: newPost }));
            navigation.goBack();
        } catch (e) {
            console.log(`caught an error in try catch L37 NewPostScreen`);
            console.log(e);
        }*/
        navigation.navigate('AthleteFinder', {
            filter:{
                mainGym:  mainGym ,
                mainSport:  mainSport},
                level: level
              });
          

    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButton/>
                <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={mainGym}
                        onChangeText={(value) => setMainGym(value)}
                        multiline={true}
                        numberOfLines={1}
                        style={styles.postInput}
                        placeholder={"Main Gym"}
                    />
                    <TextInput
                        value={mainSport}
                        onChangeText={(value) => setMainSport(value)}
                        multiline={true}
                        numberOfLines={1}
                        style={styles.postInput}
                        placeholder={"Main Sport"}
                    />
                    <RNPickerSelect onValueChange={(value) => setLevel(value)}
                        placeholder={placeholder}
                        style={{ inputAndroid: { color: 'black' } }}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: 'Beginner', value: 'Beginner' },
                            { label: 'Intermediate', value: 'Intermediate' },
                            { label: 'Advanced', value: 'Advanced' },
                            { label: 'Expert', value: 'Expert' },
                        ]}
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
    mainContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        padding: 15,
        margin: 15,
        marginBottom: 10,
        width: 'auto',
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
    postInput: {
        height: 30,
        maxHeight: 50,
        fontSize: 18,
        marginBottom: 30,
    },
    imageInput: {

    },
});
