import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Layout } from 'react-native-ui-kitten';
import Header from '../components/Header'



export default function Explore() {
    return (
        <Layout style={styles.container}>
            <Header></Header>
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