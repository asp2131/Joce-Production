import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, NormalizedCacheObject  } from '@apollo/client';


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export default function App() {

  client
    .query({
      query: gql`
      query {
  books {
    author
    
    title
  }
}
    `
    })
    .then(result => console.log(result.data));

  return (
    // <ApolloProvider client={client} >
      <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/text-logo.png')} />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    // </ApolloProvider> 
  );
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    backgroundColor: '#8e44ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    bottom: 200,
    resizeMode: 'contain'
  }
});
