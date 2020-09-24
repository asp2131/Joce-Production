import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet  } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, NormalizedCacheObject  } from '@apollo/client';
import Constants from 'expo-constants';
const { ANDROID_CLIENT_ID, IOS_CLIENT_ID} = Constants.manifest.extra
import Login from './screens/Login';
import Dashboard from './screens/Dashboard'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';



const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export default function App() { 

  const [dataLoaded, setDataLoaded] = useState(false);

  /*
  functions allows users to sign in with google
  @return: User, accessToken, statusType
  */
  const signInWithGoogleAsync = async () => {
    try {
    const { type, accessToken, user } = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
      scopes: ['profile', 'email']
    });
    if (type === 'success') {
      return accessToken;
    } else {
      return { cancelled: true };
    }
    } catch (e) {
      return { error: true }
    }
  }

  const fetchFonts = () => {
    return Font.loadAsync({
      'mont-bold': require('./assets/font/mont-bold.ttf'),
      "Roboto_medium": require('./assets/font/ssp-reg.ttf'),
      "$text-font-family": require('./assets/font/ssp-reg.ttf'),
      'mont': require('./assets/font/ssp-reg.ttf'),
    });
  };

  if(!dataLoaded){
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    // <ApolloProvider client={client} >
    <NavigationContainer>
      
      {/* <Login signInWithGoogleAsync={signInWithGoogleAsync}/> */}
      <Dashboard />
    </NavigationContainer>
    // </ApolloProvider> 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e44ad',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
