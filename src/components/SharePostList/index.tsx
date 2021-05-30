import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { ListItem, BottomSheet } from 'react-native-elements';



const SharePostList = (props) => {
    const messagesList= [
        {
            title: 'Done',
            containerStyle: { backgroundColor: 'yellow' },
            titleStyle: { color: 'black' },
            onPress: () => this.props.toggleBottomSheet,
        }
    ];


    return (
        <BottomSheet
            isVisible={true}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            {messagesList.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={this.props.toggleBottomSheet }>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </BottomSheet>
    )
}


export default SharePostList;







/*

export default class SharePostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messagesList: [
                {
                    title: 'Done',
                    containerStyle: { backgroundColor: 'yellow' },
                    titleStyle: { color: 'black' },
                    onPress: () => this.props.toggleBottomSheet,
                }
            ],
        }
    }
    /*
    const [isVisible, setIsVisible] = useState(false);
    const list = [
      { title: 'List Item 1' },
      { title: 'List Item 2' },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];

    render() {
        return (
            <BottomSheet
                isVisible={true}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
                {this.state.messagesList.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={this.props.toggleBottomSheet }>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        )
    }
}

*/