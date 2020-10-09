import React, { useState } from "react";
import { Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

export default function PostCard() {
  const [likes, setLikes] = useState(0);
  const navigation = useNavigation();

  // const [qaView, toggleQaView] = useState(false)

  const updateLike = () => {};

  // const navigateQaView = () => {
  //     toggleQaView(true)
  // }

  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: "https://source.unsplash.com/random" }} />
            <Body>
              <Text style={styles.text}>NativeBase</Text>
              <Text style={styles.text} note>
                GeekyAnts
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: "https://source.unsplash.com/user/erondu/daily",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text style={styles.text}>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button onPress={() => navigation.navigate("ViewPost")} transparent>
              <Icon active name="chatbubbles" />
              <Text style={styles.text}>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text style={styles.text}>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "mont",
  },
});
