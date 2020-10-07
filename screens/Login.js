import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Button } from "@ui-kitten/components";

export default function Login(props) {
  const { signInWithGoogleAsync } = props;
  /*
  functions allows users to sign in with google
  @return: User, accessToken, statusType
  */

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/text-logo.png")} />
      <Button title="Login with Google" onPress={signInWithGoogleAsync}>
        {"Login With Google"}
      </Button>
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
