import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class PostCard extends Component {
    render() {
        return (
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: "https://source.unsplash.com/random" }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{
                                uri: "https://source.unsplash.com/user/erondu/daily" }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
        );
    }
}