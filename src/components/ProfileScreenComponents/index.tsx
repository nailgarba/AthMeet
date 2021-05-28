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


class ProfileScreenComponents extends Component{
    constructor(props){
        super(props);

        this.state={
            user:{...this.props.user},
            testvar:'testvar',
            loaded:false,

        }
        console.log(`----------------------------------------------------`);
        console.log(`------------------ProfileScreenComponents----------------------`);
        console.log(`-------------------this.state------------------`);
        console.log(`----------------------------------------------------`);
        console.log(this.state);
        console.log(`----------------------------------------------------`);
        console.log(`----------------------------------------------------`);
        console.log(this.state.user);
        console.log(`----------------------------------------------------`);
        console.log(this.state.testvar);
    }
    componentDidMount(){
        if(this.state.user?.id){
            this.setState({
                loaded: true
              });
            console.log(`----------------------------------------------------`);
    console.log(`------------------ProfileScreenComponents----------------------`);
    console.log(`-------------------this.state------------------`);
    console.log(`----------------------------------------------------`);
    console.log(this.state);
    console.log(`----------------------------------------------------`);
    console.log(`--------------------user--------------------------------`);
    console.log(this.state.user);
    console.log(`----------------------------------------------------`);
    console.log(`---------------------testvar-------------------------------`);
    console.log(this.state.testvar);
        }
        if(this.state.loaded=false){
            //this.render();
        }
    }

/*
const ProfileScreenComponents = ({user}: UserProps) => {
    console.log(`----------------------------------------------------`);
            console.log(`------------------ProfileScreenComponents----------------------`);
            console.log(`-------------------user id-------------------`);
            console.log(`----------------------------------------------------`);
            console.log(user.id);
            console.log(`----------------------------------------------------`);
    
*/

render(){
    console.log(`----------------------------------------------------`);
    console.log(`------------------ProfileScreenComponents----------------------`);
    console.log(`-------------------this.state------------------`);
    console.log(`----------------------------------------------------`);
    console.log(this.state);
    console.log(`----------------------------------------------------`);
    console.log(`--------------------user--------------------------------`);
    console.log(this.state.user);
    console.log(`----------------------------------------------------`);
    console.log(`---------------------testvar-------------------------------`);
    console.log(this.state.testvar);

    return (
    <View style ={styles.container}>
        <View style={styles.topContainer}>
        <TopContainer user={this.state.user}/>
        </View>
        
    </View>

)}
}


//{this.state.loaded? <TopContainer user={this.state.user}/>: null}        

//        <View style={styles.middleContainer}>
        //{this.state.loaded? <MiddleContainer  user={this.state.user}/>: null}        
//        </View>
//<Feed/>
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


/*

        <BottomContainer user={user}/>
        */



/*
<View style ={{width: '100%'}}>
        <FlatList
            data = {posts}
            renderItem={({item}) => <Post post = {item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
*/