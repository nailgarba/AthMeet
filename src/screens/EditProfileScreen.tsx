import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Platform, Image, TouchableOpacity } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons, } from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';
import BackButton from '../components/BackButton';
import * as ImagePicker from 'expo-image-picker';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import moment from 'moment';
import { updateUser } from '../src/graphql/mutations'
import { UpdateUserInput } from '../src/API';
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {

    const navigation = useNavigation();
    const placeholder = {
        label: 'Select level of progression',
        value: null,
    };
    const [mainGym, setMainGym] = React.useState("");
    const [mainSport, setMainSport] = React.useState("");
    const [myID, setMyID] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [name, setName] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");

    const onSave = async () => {
        console.log(`----------------Saving Changes to profile-------------`);
        let image;
        try{

            if (!!imageURL) {
                image = await uploadImage();
            }
        }catch(e){
            console.log(e);
        }
        var newUser = {};
        if (myID !== "") {
            newUser = { id: myID };

            if (imageURL !== "") {
                newUser = { ...newUser, image: image }
            }
            if (level !== "") {
                newUser = { ...newUser, level: level }
            }
            if (mainGym !== "") {
                newUser = { ...newUser, mainGym: mainGym }
            }
            if (mainSport !== "") {
                newUser = { ...newUser, mainSport: mainSport }
            }
            if (name !== "") {
                newUser = { ...newUser, name: name }
            }
            try{

                const updateUserToDB = async (newUser: UpdateUserInput) => {
                    await API.graphql(graphqlOperation(updateUser, { input: newUser }))
                }
                updateUserToDB(newUser);
            }
            catch(e){
                console.log(e);
            }
        }
        navigation.goBack();
    }
    const getUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
        if (userInfo) {
            setMyID(userInfo.attributes.sub);
        }
    }

    const getPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please accept camera roll permissions');
            }
        }
    }
    React.useEffect(() => {
        getUser();
        getPermission();
    }, [])
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImageURL(result.uri)
            }
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };
    const generateKey = (url) => {
        const date = moment().format("YYYYMMDD");
        const randomString = Math.random().toString(36).substring(2, 7);
        const fileName = url.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const newFileName = `${date}-${randomString}-${fileName}`;
        return newFileName.substring(0, 60);
    }

    const uploadImage = async () => {

        try {
            const response = await fetch(imageURL);
            const blob = await response.blob();
            const urlParts = imageURL.split('.');
            const extension = urlParts[urlParts.length - 1];
            const key = generateKey(imageURL);
            await Storage.put(key, blob, {
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
                <BackButton/>
                <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={(value) => setName(value)}
                        multiline={true}
                        numberOfLines={1}
                        style={styles.postInput}
                        placeholder={"New Profile Name"}
                    />
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
                    <View style={styles.imageContainer}>
                        <Image source={{ uri:imageURL }} style={styles.image} />
                    </View>
                    <View style={styles.imageInputContainer} >

                        <TouchableOpacity onPress={pickImage}>
                            <Text style={styles.pickImage}>Upload New Profile Picture</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

/*
class EditProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {

            placeholder: {
                label: 'Select level of progression',
                value: null,
            },
            mainGym: "",
            mainSport: "",
            level: "",
            name: "",
            imageURl: "",
            newName: "",
            myID: "",
            updatedUser: [],
        }
        var mainGym = "";
        var mainSport = "";
        var level = "";


    }
    getUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
        if (userInfo) {
            this.setState({
                myID: userInfo.attributes.sub
            })
        }
    }
    setName(value) {
        if (value) {
            this.setState({
                newName: value
            });
        }
    }
    setMainGym(value) {
        if (value) {
            this.setState({
                mainGym: value
            });
        }
    }

    setMainSport(value) {
        if (value) {
            this.setState({
                mainSport: value
            });
        }
    }

    setLevel(value) {
        if (value) {
            this.setState({
                level: value
            });
        }
    }

    onSave = async () => {
        console.warn("OnPostPost");
        console.log(`----------------Saving Changes to profile-------------`);
        var newUser = {};
        if (this.state.myID !== "") {
            newUser = { id: this.state.myID };

            if (this.state.imageURl !== "") {
                newUser = { ...newUser, image: this.state.imageURl }
            }
            if (this.state.level !== "") {
                newUser = { ...newUser, level: this.state.level }
            }
            if (this.state.mainGym !== "") {
                newUser = { ...newUser, mainGym: this.state.mainGym }
            }
            if (this.state.mainSport !== "") {
                newUser = { ...newUser, mainSport: this.state.mainSport }
            }
            if (this.state.name !== "") {
                newUser = { ...newUser, name: this.state.name }
            }

            const updateUserToDB = async (newUser: UpdateUserInput) => {
                await API.graphql(graphqlOperation(updateUser, { input: newUser }))
            }
            updateUserToDB(newUser);
        }
    }






    getPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please accept camera roll permissions');
            }
        }
    }
    useEffect() {
        this.getUser();
        this.getPermission();
    }
    pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    imageURl: result.uri
                });
            }
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };
    generateKey = (url) => {
        const date = moment().format("YYYYMMDD");
        const randomString = Math.random().toString(36).substring(2, 7);
        const fileName = url.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const newFileName = `${date}-${randomString}-${fileName}`;
        return newFileName.substring(0, 60);
    }

    uploadImage = async () => {

        try {
            const response = await fetch(this.state.imageURL);
            const blob = await response.blob();
            const urlParts = this.state.imageURL.split('.');
            const extension = urlParts[urlParts.length - 1];
            const key = this.generateKey(this.state.imageURL);
            await Storage.put(key, blob, {
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




    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.headerContainer}>
                        <BackButton />
                        <TouchableOpacity style={styles.button} onPress={this.onSave}>
                            <Text style={styles.buttonText}>SAVE CHANGES</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.mainContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.setName}
                                multiline={false}
                                numberOfLines={1}
                                style={styles.postInput}
                                placeholder={"Change Profile Name"}
                            />
                            <TextInput
                                onChangeText={this.setMainGym}
                                multiline={false}
                                numberOfLines={1}
                                style={styles.postInput}
                                placeholder={"Change Main Gym"}
                            />
                            <TextInput
                                onChangeText={this.setMainSport}
                                multiline={false}
                                numberOfLines={1}
                                style={styles.postInput}
                                placeholder={"Change Main Sport"}
                            />
                            <RNPickerSelect onValueChange={this.setLevel}
                                placeholder={this.state.placeholder}
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
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: this.state.imageURL }} style={styles.image} />
                    </View>
                    <View style={styles.imageInputContainer} >

                        <TouchableOpacity onPress={this.pickImage}>
                            <Text style={styles.pickImage}>Upload New Profile Picture</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>


        )
    }

}

export default EditProfileScreen;
*/


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
        alignSelf: 'center',

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
    imageInputContainer: {
        marginLeft: 10,
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









/*
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
        alignSelf: 'center',

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
});*/
