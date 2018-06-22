import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

export default class PostDetail extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', 'A Nested Details Screen'),
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

        const name = this
            .props
            .navigation
            .getParam('title', 'Undefined');
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.des}>Xin chao cac ban, day la bai viet dau tien cua toi.</Text>
                    <Image style={styles.image} source={require('./img/fz.png')}/>
                    <Text style={styles.post}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </Text>
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
    title: {
        fontSize: 40,
        color: 'blue'
    },
    des: {
        fontSize: 18
    },
    post: {
        fontSize: 24,
        textAlign: 'auto'
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
