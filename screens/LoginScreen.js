import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

export default class LoginScreen extends React.Component {

    state = {
        user: 'asdfsadf',
        name: ''
    }

    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
                style={{
                width: '100%',
                height: '100%'
            }}
                source={require('./img/street.jpg')}>
                <View
                    style={[
                    styles.container, {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        flex: 1
                    }
                ]}>
                    <Image style={styles.image} source={require('./img/fz.png')}/>
                    <View style={styles.input}>
                        <Image style={styles.inputIcon} source={require('./img/acc.png')}/>
                        <TextInput
                            style={styles.user}
                            placeholder="User Name:"
                            underlineColorAndroid='white'/>
                    </View>
                    <View style={styles.input2}>
                        <Image style={styles.inputIcon} source={require('./img/pass.png')}/>
                        <TextInput
                            style={styles.pass}
                            placeholder="Password:"
                            secureTextEntry={true}
                            underlineColorAndroid='white'/>
                    </View>
                    <TouchableOpacity style={styles.button} title="Login" onPress={() => navigate('Post')}>
                        <Text style={styles.loginBtn}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgotPass}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View
                        style={[
                        styles.createView, {
                            flexDirection: 'row'
                        }
                    ]}>
                        <Text
                            style={{
                            color: 'white'
                        }}>Don't have account?
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                color: '#81D4FA',
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                                Create One
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        marginTop: 80,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    input: {
        flexDirection: 'row',
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, 0.1)'
    },
    input2: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, 0.1)'
    },
    inputIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 5
    },
    user: {
        fontSize: 20,
        color: 'white',
        width: 215,
        height: 40
    },
    pass: {
        fontSize: 20,
        width: 215,
        height: 40,
        color: 'white'
    },
    loginBtn: {
        marginTop: 10,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        width: 250,
        height: 30,
        backgroundColor: 'rgba(255,255,255, 0.3)'
    },
    forgotPass: {
        marginTop: 5,
        fontSize: 15,
        color: 'white'
    },

    createView: {
        marginTop: 90
    }
});
