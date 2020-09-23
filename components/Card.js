import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default function PostCard(){

    const [likes, setLikes] = useState(0);
    const navigation = useNavigation(); 

    // const [qaView, toggleQaView] = useState(false)

    const updateLike = () => {
        
    }

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
                            <Button onPress={() => navigation.navigate("ViewPost")} transparent>
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

