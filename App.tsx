import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ApplicationProvider } from "react-native-ui-kitten";
import * as eva from "@eva-design/eva";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";





export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "mont-bold": require("./assets/font/mont-bold.ttf"),
      Roboto_medium: require("./assets/font/ssp-reg.ttf"),
      "$text-font-family": require("./assets/font/ssp-reg.ttf"),
      mont: require("./assets/font/ssp-reg.ttf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
  
      <NavigationContainer>
        {/* <Login/> */}
        <Dashboard />
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e44ad",
    alignItems: "center",
    justifyContent: "center",
  },
});
