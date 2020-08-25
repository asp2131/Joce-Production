import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button} from '@ui-kitten/components';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, NormalizedCacheObject  } from '@apollo/client';


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export default function App() {

//   client
//     .query({
//       query: gql`
//       query {
//   books {
//     author
    
//     title
//   }
// }
//     `
//     })
//     .then(result => console.log(result.data));

  return (
    // <ApolloProvider client={client} >
    <ApplicationProvider {...eva} theme={eva.dark}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/text-logo.png')} />
  <Button title="Login with Google">{"Login With Google"}</Button> 
        <Image style={styles.rocket} source={require('./assets/picsart.png')} />
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
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
    bottom: 100,
    resizeMode: 'contain'
  },
  rocket: {
    top: 650,
    position: 'absolute',
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
  button: {
    color: "#fff",
    textDecorationColor: "#8e44ad"
  } 
});
