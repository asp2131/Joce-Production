import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import {
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Textarea,
  Form,
  Header,
  Title,
  Right,
  Left,
  Switch,
  Button,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import BottomSheet from "../components/BottomSheet";
import { Layout } from "react-native-ui-kitten";

function AddPost(props) {
  [state, setState] = useState({ image: null, title: "", description: "" });
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onChangeTitle = (title) => {
    setState({ title });
  };
  const onChangeDescription = (description) => {
    setState({ description });
  };

  const onSubmit = async () => {
    try {
      const post = {
        photo: state.image,
        title: state.title,
        description: state.description,
      };
      // props.firebase.uploadPost(post)

      setState({
        image: null,
        title: "",
        description: "",
      });
    } catch (e) {
      console.error(e);
    }
  };
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make work!");
      }
    }
  };

  const selectImage = async () => {
    console.log("hello world");
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);
      setState({ image: result.uri });
    } catch (e) {
      console.log(e);
    }
  };

  const cancelImage = () => {
    setState({ image: null });
  };

  return (
    <Layout>
      <ScrollView>
        <SafeAreaView
          style={{
            marginTop: Constants.statusBarHeight,
            flex: 1,
          }}
        >
          <Header
            androidStatusBarColor="#e6deff"
            iosBarStyle="#e6deff"
            style={{ backgroundColor: "#ffff" }}
          >
            <Left>
              <Button transparent>
                <Icon style={{ color: "black" }} name="arrow-back" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Text>Post</Text>
              </Button>
            </Right>
          </Header>

          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{ uri: "https://source.unsplash.com/random" }}
                />
                <Body>
                  <Text style={styles.text}>NativeBase</Text>
                  <Text style={styles.text} note>
                    GeekyAnts
                  </Text>
                </Body>
              </Left>
              <Right>
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
              </Right>
            </CardItem>
          </Card>

          {/* <View , alignItems: 'center' }}> */}
          {
            <View>
              {state.image ? (
                <View>
                  <Icon
                    onPress={cancelImage}
                    style={{ color: "black", left: 10, margin: 5 }}
                    name="x-circle"
                    type="Feather"
                  />
                  <Image
                    source={{ uri: state.image }}
                    style={{ width: "100%", height: 300 }}
                  />
                </View>
              ) : (
                <TouchableHighlight>
                  <Button transparent />
                </TouchableHighlight>
              )}
            </View>
          }
          <View style={{ marginTop: 30 }}>
            <Form>
              <Textarea rowSpan={10} placeholder="Write something.." />
            </Form>
          </View>
          <BottomSheet selectImage={selectImage} />
          {/* </View> */}
        </SafeAreaView>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "mont",
  },
});

export default AddPost;
