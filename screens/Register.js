import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from "react-native-ui-kitten";

const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "black",
    purple: "#8e44ad",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#ff5a66",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe",
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16,
  },
  buttonWidth: {
    main: "70%",
  },
  textInputWidth: {
    main: "80%",
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans",
  },
  borderRadius: {
    main: 25,
    small: 5,
  },
};

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      fullname: "",
      phone: "",
      email: "",
      bio: "",
    };
  }

  

  componentWillUnmount() {
    
  }

  onRegister = () => {
    
  };

  render() {
    const { googleAvatar } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
        <Image style={styles.userImage} source={{ uri: googleAvatar }} />

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="User Name"
            onChangeText={(text) => this.setState({ fullname: text })}
            value={this.state.fullname}
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
          onPress={() => this.onRegister()}
        >
          Create Account
        </Button>
        <Image
          style={styles.logo}
          source={require("../assets/text-logo.png")}
        />
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
    marginTop: 50,
  },
});

export default SignupScreen;
