import React, { Component } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SharePostList from '../SharePostList';
import { useNavigation } from '@react-navigation/native';


const ShareButton = (props) => {

    const post = props.post;
    const navigation = useNavigation();
    const goToPostMessagesScreen = () => {
        navigation.navigate('PostSend', {
            postID: post.id,
        });
    }


    return (
        <View>

            <TouchableOpacity onPress={goToPostMessagesScreen}>
                {post && <MaterialCommunityIcons name={"share"} size={20} color={'grey'} />}
            </TouchableOpacity>
        </View>
    );


};


export default ShareButton;

/*
export default class ShareButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: props.post,
            chatRooms: [],
            testchatRooms: [],
            showBottomSheet: false,

        }
        this.toggleBottomSheet= this.toggleBottomSheet.bind(this);

    }
    toggleBottomSheet = async () => {
        if (this.state?.showBottomSheet) {

            if (this.state.showBottomSheet) {
                this.setState({
                    showBottomSheet: true
                })
            } else {
                this.setState({
                    showBottomSheet: false
                })
            }
        } else {
            this.setState({
                showBottomSheet: false
            })
        }
    }

    goToPostMessagesScreen(){
      //  this.props.navigation.navigate('PostSendScreen', {
       //     post: this.state.post,
     //     })
    }

    componentDidMount(){

            if (this.state?.showBottomSheet) {
                this.setState({
                    showBottomSheet: true
                });

        }
    }

    render(){
        const { navigation } = this.props;
        return (
            <View>

                <TouchableOpacity onPress={()=>navigation.navigate('PostSendScreen', {
     post: this.state.post,   })}>
                    <MaterialCommunityIcons name={"share"} size={20} color={'grey'} />
                </TouchableOpacity>
        </View>
        );
    }
}

{this.state?.toggleBottomSheet && <SharePostList toggleBottomSheet={this.toggleBottomSheet} />}


componentDidMount= async ()=>{

        if (!this.state?.showBottomSheet) {
            if (this.state.showBottomSheet) {
                this.setState({
                    showBottomSheet: true
                });
        }
    }
    */

