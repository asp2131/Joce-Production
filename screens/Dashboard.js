import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, z } from 'react-native';
import { ApplicationProvider} from 'react-native-ui-kitten';
import * as eva from '@eva-design/eva';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home'
import Explore from './Explore'
import Create from './Create'
import Profile from './Profile'


const Tab = createMaterialBottomTabNavigator();

export default function Dashboard() {

    const [theme, setTheme] = React.useState(eva.light);
    const [navColor, setNav] = React.useState('#8e44ad');
    const [brightness, setBrightness] = React.useState('rgb(35, 43, 67)');
    const [logo, setLogo] = React.useState(true)

    const toggleTheme = () => {
        const nextTheme = theme === eva.light ? eva.dark : eva.light;
        const newNavColor = navColor === '#8e44ad' ? 'rgb(35, 43, 67)' : '#8e44ad';
        const sunColor = brightness === 'rgb(35, 43, 67)' ? '#8e44ad' : 'rgb(35, 43, 67)';
        setLogo(!logo)
        setBrightness(brightness)
        setTheme(nextTheme);
        setNav(newNavColor)
    };



    return (
        <ApplicationProvider mapping={eva.mapping} {...eva} theme={theme}>
            <Tab.Navigator
                barStyle={{ backgroundColor: navColor }}
            >
                <Tab.Screen
                    name="Feed"
                    children={() => <Home logo={logo} brightness={brightness} toggleTheme={toggleTheme} />}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={Explore}
                    options={{
                        tabBarLabel: 'Explore',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="compass" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Create"
                    component={Create}
                    options={{
                        tabBarLabel: 'Create',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="pencil" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={20} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </ApplicationProvider>

    );
}
