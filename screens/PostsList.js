import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

export default class PostList extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#2F4F4F'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>

                <Button
                    onPress={() => {
                    navigate('CreateNewPost')
                }}
                    title="Create new post"
                    color="#2F4F4F"
                    style={{
                    width: '100%',
                    height: 70,
                    marginTop: -10
                }}/>

                <TouchableOpacity
                    onPress={() => {
                    navigate('PostDetail', {title: "Title"})
                }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Bai viet 1</Text>
                        <Image style={styles.image} source={require('./img/fz.png')}/>
                        <Text style={styles.post}>Xin chao cac ban, day la bai viet dau tien cua toi.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                    navigate('PostDetail', {title: "Title"})
                }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Bai viet 2</Text>
                        <Image style={styles.image} source={require('./img/fz.png')}/>
                        <Text style={styles.post}>Xin chao cac ban, day la bai viet dau tien cua toi.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    navigate('PostDetail', {title: "Title"})
                }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Bai viet 3</Text>
                        <Image style={styles.image} source={require('./img/fz.png')}/>
                        <Text style={styles.post}>Xin chao cac ban, day la bai viet dau tien cua toi.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    navigate('PostDetail', {title: "Title"})
                }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Bai viet 4</Text>
                        <Image style={styles.image} source={require('./img/fz.png')}/>
                        <Text style={styles.post}>Xin chao cac ban, day la bai viet dau tien cua toi.</Text>
                    </View>
                </TouchableOpacity>
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
    title: {
        fontSize: 40,
        color: 'blue'
    },
    post: {
        fontSize: 24
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    contentContainer: {
        paddingVertical: 10
    }
});
