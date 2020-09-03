import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import { Container, Header, Tab, Tabs, ScrollableTab, Icon, Button, Body, Right } from 'native-base';

export default function TabsScrollableExample(){
    
        return (
            <Layout  >
                <Header androidStatusBarColor="#e6deff" iosBarStyle="#e6deff"  hasTabs transparent>
                    <Body>
                        <Text style={styles.header}>Explore</Text>
                    </Body>
                    <Right>
                        <Button
                        style={styles.nav}
                        >
                            <Icon style={{color: "black"}} name='search' />
                        </Button>
                    </Right>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab
                        activeTabStyle={{ backgroundColor: 'white' }}
                        activeTextStyle={{ color: "black" }}
                        tabStyle={{ backgroundColor: 'white' }}
                        heading="Fashion">
                        <Text >Tab 1</Text>
                    </Tab>
                    <Tab
                        heading="Sports"
                        activeTabStyle={{ backgroundColor: 'white' }}
                        activeTextStyle={{ color: "black" }}
                        tabStyle={{ backgroundColor: 'white' }}>
                        <Text>Tab 2</Text>
                    </Tab>
                    <Tab
                        heading="Tech"
                        activeTabStyle={{ backgroundColor: 'white' }}
                        activeTextStyle={{ color: "black" }}
                        tabStyle={{ backgroundColor: 'white' }}>
                        <Text>Tab 3</Text>
                    </Tab>
                    <Tab
                        heading="Music"
                        activeTabStyle={{ backgroundColor: 'white' }}
                        activeTextStyle={{ color: "black" }}
                        tabStyle={{ backgroundColor: 'white' }}>
                        <Text>Tab 4</Text>
                    </Tab>
                    <Tab
                        heading="Gaming"
                        activeTabStyle={{ backgroundColor: 'white' }}
                        activeTextStyle={{ color: "black" }}
                        tabStyle={{ backgroundColor: 'white' }}>
                        <Text>Tab 5</Text>
                    </Tab>
                </Tabs>
            </Layout>
        );
    
}


const styles = StyleSheet.create({
    text:{
        color: 'black'
    },
    header: {
        fontWeight: "bold",
        fontSize: 32
    },
    nav: {
        backgroundColor: '#ffff'
    }
})