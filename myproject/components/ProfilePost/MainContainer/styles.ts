import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
    },
    postHeaderContainer: {
        flexDirection: 'row',
    },
    name:{
        marginRight:5,
        fontWeight:'bold',
    },
    username: {
        marginRight:5,
        color: 'grey',
    },
    content:{
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,

    },
});



export default styles;