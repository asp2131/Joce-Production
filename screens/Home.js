import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Poll from '../components/Poll'
import { Button, Text, Layout } from 'react-native-ui-kitten';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import NavBar from 'antd-mobile/lib/';



export default function Home(props) {
    const { toggleTheme, brightness} = props;

    return (
        <Layout style={styles.container}>
            <Layout style={styles.header} level='2'>
                <TouchableOpacity onPress={toggleTheme}>
                <MaterialCommunityIcons name="brightness-6" color={brightness} size={20} />
            </TouchableOpacity>
            </Layout>
            <Image style={styles.logo} source={require('../assets/text-logo.png')} />

            <Poll />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        top: 75,
        width: 55,
        height: 55,
        resizeMode: 'contain'
    },
    header: {
        flexDirection: 'row',
        top: 75,
        left: 150
    }
})