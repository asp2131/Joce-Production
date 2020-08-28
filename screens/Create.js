import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Layout } from 'react-native-ui-kitten';




export default function Create() {
    return (
        <Layout style={styles.container}>
            <Text>Create Poll!</Text>
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