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
    return (
        <ApplicationProvider mapping={eva.mapping} {...eva} theme={eva.dark}>
            <Tab.Navigator
                barStyle={{ backgroundColor: 'rgb(35, 43, 67)' }}
            >
                <Tab.Screen
                    name="Feed"
                    component={Home}
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
