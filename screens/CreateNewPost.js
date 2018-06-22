import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

export default class CreateNewPost extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Create New Post",
            headerStyle: {
                backgroundColor: '#2F4F4F'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        };
    }

    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#FFF'
            }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.img} source={require('./img/smile.png')}/>
                        <TextInput
                            style={styles.title}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="What's on your mind?"/>
                    </View>
                    <TextInput
                        style={styles.post}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        multiline={true}/>
                </View>
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={[styles.button,{marginRight: 10}]}>
                        <Text style={styles.buttonText}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Choose image</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        marginLeft: 10
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'center',
        padding: 10,
        marginRight: 10
    },
    title: {
        width: '80%',
        height: 50,
        fontSize: 24,
        fontWeight: 'bold'
    },
    post: {
        width: '95%',
        height: 200,
        backgroundColor: 'rgba(211,211,211, 0.2)',
        textAlignVertical: "top",
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2F4F4F'
    },
    button: {
        height: 40,
        padding: 10,
        backgroundColor: '#2F4F4F'
    },
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFF'
    }
});
