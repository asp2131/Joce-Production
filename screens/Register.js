import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from "react-native-ui-kitten";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import {Toast} from 'native-base'
import {AppStyles} from './utils'


class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      username: "",
      phone: "",
      email: "",
      bio: "",
    };
  }

  componentWillUnmount() {}

  onRegister = () => {};

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make work!");
      }
    }
  };

  selectImage = async () => {
    console.log("hello world");
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      //   console.log(result);
      //   googleUser.photoUrl = result.uri;
      this.props.setGoogleUser((prevUser) => ({
        ...prevUser,
        photoUrl: result.uri,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { googleUser } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/text-logo.png")}
        />
        <Text style={[styles.title, styles.leftTitle]}>Create new profile</Text>
        <Image style={styles.userImage} source={{ uri: googleUser.photoUrl }} />

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="User Name"
            onChangeText={(text) => this.setState({ username: text })}
            value={this.state.username}
            placeholderTextColor={AppStyles.color.purple}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.bio}
            placeholder="Bio"
            onChangeText={(text) => this.setState({ bio: text })}
            value={this.state.bio}
            placeholderTextColor={AppStyles.color.purple}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          appearance="ghost"
          style={styles.facebookText}
          onPress={() => this.selectImage()}
        >
          Upload Different Profile Picture
        </Button>
        <Button
          appearance="ghost"
          style={styles.facebookText}
          onPress={() => this.onRegister()}
        >
          Create Account
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppStyles.color.white,
  },
  userImage: {
    borderRadius: 60,
    height: 120,
    marginBottom: 10,
    width: 120,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 75,
    marginBottom: 20,
  },
  logo: {
    top: 75,
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "left",
    marginLeft: 20,
    color: AppStyles.color.purple,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#8e44ad",
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  bio: {
    height: 75,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 60,
  },
  facebookText: {
    color: AppStyles.color.purple,
    marginTop: 30,
  },
});

export default SignupScreen;
