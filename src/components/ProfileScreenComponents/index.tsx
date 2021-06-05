import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import  {StyleSheet} from 'react-native';
import {UserType} from '../../types';
import TopContainer from './TopContainer';
//import BottomContainer from './BottomContainer';
import MiddleContainer from './MiddleContainer';
import users from '../../data/users';
import Feed from '../Feed';

export {UserType} from '../../types';


export type UserProps = {
    user: UserType,
}

//Generate Profile information
class ProfileScreenComponents extends Component{
    constructor(props){
        super(props);

        this.state={
            user:{...this.props.user},
            testvar:'testvar',
            loaded:false,

        }
    }

    componentDidMount(){
        if(this.state.user?.id){
            this.setState({
                loaded: true
              });
        }
        if(this.state.loaded=false){
            //this.render();
        }
    }



render(){
    return (
    <View style ={styles.container}>
        <View style={styles.topContainer}>
        <TopContainer user={this.state.user}/>
        </View>
        
    </View>

)}
}

export default ProfileScreenComponents;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        margin:'auto',
        justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        margin:'auto',
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    middleContainer: {
        flex: 1,
        margin:'auto',
        justifyContent: 'center',
    },
   
});
