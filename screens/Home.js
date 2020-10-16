import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import Poll from '../components/Poll'
import { Button, Text, Layout } from 'react-native-ui-kitten';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

// import NavBar from 'antd-mobile/lib/';



export default function Home(props) {
    const { toggleTheme, brightness, logo} = props;
    const navigation = useNavigation();

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        };

        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );

        
      Toast.show({
        text1: "Welcome Back",
        position: "bottom",
        visibilityTime: 2000,
      });
      return () => backHandler.remove();
    }, []);

    return (
      <Layout style={styles.container}>
        <Layout style={styles.header} level="2">
          <TouchableOpacity onPress={toggleTheme}>
            <MaterialCommunityIcons
              name="brightness-6"
              color={brightness}
              size={20}
            />
          </TouchableOpacity>
        </Layout>
        {logo ? (
          <Image
            style={styles.logo}
            source={require("../assets/joceAlt.png")}
          />
        ) : (
          <Image
            style={styles.logo}
            source={require("../assets/text-logo.png")}
          />
        )}

        <Poll />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        top: 75,
        width: 55,
        height: 55,
        resizeMode: 'contain'
    },
    header: {
        flexDirection: 'row',
        top: 75,
        left: 150
    }
})