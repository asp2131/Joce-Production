import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-ui-kitten";
import * as Google from "expo-google-app-auth";
import Constants from "expo-constants";
import { useMutation } from "urql";
import {mutations} from './utils'
const { ANDROID_CLIENT_ID, IOS_CLIENT_ID } = Constants.manifest.extra;
import { useNavigation } from "@react-navigation/native";



export default function Login({setGoogleUser}) {
  const navigation = useNavigation();
  let [loginStatus, setStatus] = useState('');

  const [loginUserResult, loginUser] = useMutation(mutations.LOGIN);
  /*
  functions allows users to sign in/sign up with google
  @return: User, accessToken, statusType
  */
  const signInWithGoogleAsync = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });
      if (type === "success") {
        
        loginUser({email: user.email, id_google: user.id})
          .then(loginresult => {
          // The result is almost identical to `updateTodoResult` with the exception
          // of `result.fetching` not being set.
          // console.log(loginresult.data.login.user)
          // console.log(loginresult.data.login.user)
          console.log(user);
          setGoogleUser(user);
          if(loginresult.data.login.user === null){
              navigation.navigate("Register");
          }
        })
          .catch(e => console.log(e));
        // setStatus(loginResult)
        
        return {accessToken: accessToken, user: user};
      } 
      
    } catch (e) {
      return { error: true };
    }
  };


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/text-logo.png")} />
      <Button
        appearance="ghost"
        status="success"
        style={{size: 100}}
        title="Login with Google"
        onPress={() => {
          return loginUser(signInWithGoogleAsync());
        }}
      >
        {"Login With Google"}
      </Button>
      <Text>{loginStatus}</Text>
      <Image style={styles.rocket} source={require("../assets/picsart.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e44ad",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    bottom: 100,
    resizeMode: "contain",
  },
  rocket: {
    top: 650,
    position: "absolute",
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  button: {
    color: "#fff",
    textDecorationColor: "#8e44ad",
  },
});
