import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider } from "react-native-ui-kitten";
import * as eva from "@eva-design/eva";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Explore from "./Explore";
import Create from "./Create";
import Profile from "./Profile";
import QaPost from "./QaPost";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import { createClient, Provider } from "urql";

const client = createClient({ url: "http://192.168.0.97:3000/graphql" });

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  const [logo, setLogo] = useState(true);
  const [theme, setTheme] = useState(eva.light);
  //saves the state of user => will eventually be the intiall value of user context
  const [user, setUser] = useState(undefined);

  // const [navColor, setNav] = React.useState("#8e44ad");
  // const [brightness, setBrightness] = React.useState("rgb(35, 43, 67)");

  // const toggleTheme = () => {
  //   const nextTheme = theme === eva.light ? eva.dark : eva.light;
  //   const newNavColor = navColor === "#8e44ad" ? "rgb(35, 43, 67)" : "#8e44ad";
  //   const sunColor =
  //     brightness === "rgb(35, 43, 67)" ? "#8e44ad" : "rgb(35, 43, 67)";
  //   setLogo(!logo);
  //   setBrightness(sunColor);
  //   setTheme(nextTheme);
  //   setNav(newNavColor);
  // };

  return (
    <Provider value={client}>
      <ApplicationProvider mapping={eva.mapping} {...eva} theme={theme}>
        <LoginStack setUser={setUser} />
        {/* <Tab.Navigator barStyle={{ backgroundColor: navColor }}>
        <Tab.Screen
          name="Feed"
          children={() => (
            <Home
              logo={logo}
              brightness={brightness}
              toggleTheme={toggleTheme}
            />
          )}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="compass" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarLabel: "Create",
            tabBarVisible: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator> */}
      </ApplicationProvider>
    </Provider>
  );
}

function LoginStack({setUser}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login">
        {(props) => <Login {...props} setUser={setUser} />}
      </Stack.Screen>
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Explore} />
      <Stack.Screen name="ViewPost" component={QaPost} />
    </Stack.Navigator>
  );
}
