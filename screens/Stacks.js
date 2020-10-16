import React, { useState } from "react";
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

import { AppStyles } from "./utils";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function MainStack({ setGoogleUser, googleUser, setMainUser }) {
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
