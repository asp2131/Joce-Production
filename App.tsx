import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    // </ApolloProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
