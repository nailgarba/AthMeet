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
    postedAt: {
        marginRight:5,
        color: 'grey',
    },
    content:{
        marginVertical: 4,
        fontSize: 15,
        lineHeight: 18,

    },
    image: {
        marginVertical: 5,
        width: "100%",
        height: 230,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
});



export default styles;