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
import Register from "./Register";
import { createClient, Provider } from "urql";
import { AppStyles } from "./utils";

const client = createClient({ url: "http://192.168.0.97:3000/graphql" });

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {
  const [theme, setTheme] = useState(eva.light);
  const [mainUser, setMainUser] = useState(null);
  //saves the state of user => will eventually be the intiall value of user context
  const [googleUser, setGoogleUser] = useState(undefined);
  // const [googleAvatar, setGoogleAvatar] = useState(null);

  return (
    <Provider value={client}>
      <ApplicationProvider mapping={eva.mapping} {...eva} theme={theme}>
        <LoginStack
          setMainUser={setMainUser}
          setGoogleUser={setGoogleUser}
          googleUser={googleUser}
        />
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

function LoginStack({ setGoogleUser, googleUser, setMainUser }) {
  const [logo, setLogo] = useState(true);
  const [navColor, setNav] = React.useState(AppStyles.color.purple);
  const [brightness, setBrightness] = React.useState(AppStyles.color.sun);

  const toggleTheme = () => {
    const nextTheme = theme === eva.light ? eva.dark : eva.light;
    const newNavColor =
      navColor === AppStyles.color.purple
        ? AppStyles.color.sun
        : AppStyles.color.purple;
    const sunColor =
      brightness === AppStyles.color.sun
        ? AppStyles.color.purple
        : AppStyles.color.sun;
    setLogo(!logo);
    setBrightness(sunColor);
    setTheme(nextTheme);
    setNav(newNavColor);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login">
        {(props) => (
          <Login
            {...props}
            setMainUser={setMainUser}
            setGoogleUser={setGoogleUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {(props) => (
          <Register
            {...props}
            setGoogleUser={setGoogleUser}
            googleUser={googleUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Dashboard">
        {(props) => (
          <Tab.Navigator barStyle={{ backgroundColor: navColor }}>
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
                  <MaterialCommunityIcons
                    name="compass"
                    color={color}
                    size={20}
                  />
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
                  <MaterialCommunityIcons
                    name="pencil"
                    color={color}
                    size={20}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={20}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
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
