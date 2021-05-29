import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/Posts';
import posts from '../data/posts';
import Feed from '../components/Feed';
import NewPostButton from "../components/NewPostButton";
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import BackButton from '../components/BackButton';



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
        }
        var mainGym="";
        var mainSport="";
        var level="";
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

    onSave = () => {
        console.warn("OnPostPost");
        console.log(`----------------Saving Changes to profile-------------`)
    }


    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.headerContainer}>
                        <BackButton/>
                        <TouchableOpacity style={styles.button} onPress={this.onSave}>
                            <Text style={styles.buttonText}>SAVE CHANGES</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.mainContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                onChangeText={this.setMainGym}
                                multiline={false}
                                numberOfLines={1}
                                style={styles.postInput}
                                placeholder={"Main Gym"}
                            />
                            <TextInput
                                onChangeText={this.setMainSport}
                                multiline={false}
                                numberOfLines={1}
                                style={styles.postInput}
                                placeholder={"Main Sport"}
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

                </View>
            </SafeAreaView>


        )
    }

}

export default EditProfileScreen;



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




/*
export default function AthleteFinderFilterScreen() {

    const navigation = useNavigation();
    const placeholder = {
        label: 'Select level of progression',
        value: null,
    };
    const [mainGym, setMainGym] = React.useState("");
    const [mainSport, setMainSport] = React.useState("");
    const [level, setLevel] = React.useState("");
}

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
