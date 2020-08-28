import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Poll from '../components/Poll'
import { Button, Text, Layout } from 'react-native-ui-kitten';

// import NavBar from 'antd-mobile/lib/';



export default function Home() {
    return (
        <Layout style={styles.container}>
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
    }
})