import React, { Component } from "react";
import { Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { Layout } from "react-native-ui-kitten";
import {
  Card,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Icon,
  Button,
  Body,
  Right,
  Title,
} from "native-base";
import Post from "./Card";

export default function TabsScrollableExample() {
  return (
    <Layout>
      <Header
        androidStatusBarColor="#e6deff"
        iosBarStyle="#e6deff"
        hasTabs
        transparent
      >
        <Body>
          <Text style={styles.header}>Explore</Text>
        </Body>
        <Right>
          <TouchableHighlight style={styles.nav}>
            <Icon style={{ color: "black", right: 10 }} name="search" />
          </TouchableHighlight>
        </Right>
      </Header>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab
          activeTabStyle={{ backgroundColor: "white" }}
          activeTextStyle={{ fontFamily: "mont", color: "black" }}
          textStyle={{ fontFamily: "mont" }}
          tabStyle={{ backgroundColor: "white" }}
          heading="Fashion"
        >
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Post />
            <Post />

            <Post />
            <Post />
          </ScrollView>
        </Tab>
        <Tab
          heading="Sports"
          activeTabStyle={{ backgroundColor: "white" }}
          activeTextStyle={{ fontFamily: "mont", color: "black" }}
          textStyle={{ fontFamily: "mont" }}
          tabStyle={{ backgroundColor: "white" }}
        >
          <Text>Tab 2</Text>
        </Tab>
        <Tab
          heading="Tech"
          activeTabStyle={{ backgroundColor: "white" }}
          activeTextStyle={{ fontFamily: "mont", color: "black" }}
          textStyle={{ fontFamily: "mont" }}
          tabStyle={{ backgroundColor: "white" }}
        >
          <Text>Tab 3</Text>
        </Tab>
        <Tab
          heading="Music"
          activeTabStyle={{ backgroundColor: "white" }}
          activeTextStyle={{ fontFamily: "mont", color: "black" }}
          textStyle={{ fontFamily: "mont" }}
          tabStyle={{ backgroundColor: "white" }}
        >
          <Text>Tab 4</Text>
        </Tab>
        <Tab
          heading="Gaming"
          activeTabStyle={{ backgroundColor: "white" }}
          activeTextStyle={{ fontFamily: "mont", color: "black" }}
          textStyle={{ fontFamily: "mont" }}
          tabStyle={{ backgroundColor: "white" }}
        >
          <Text>Tab 5</Text>
        </Tab>
      </Tabs>
    </Layout>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  header: {
    fontSize: 24,
    fontFamily: "mont",
  },
  nav: {
    backgroundColor: "#ffff",
  },
  contentContainer: {
    paddingVertical: 0,
  },
});
