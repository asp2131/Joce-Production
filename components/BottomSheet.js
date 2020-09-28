import React, { useRef, useEffect } from "react";
import { View, TouchableHighlight } from "react-native";
import { Layout } from 'react-native-ui-kitten';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ListItem, Button ,Text, Icon, Left, Body, Right, Switch } from 'native-base';


export default function Example(props) {

    const sheetRef = useRef(null);

    // useEffect(function(){
    //     sheetRef.current.snapTo(0)
    // })

    const renderContent = () => (
        <View>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                        <Icon active name="camera" />
                    </Button>
                </Left>
                <Body>
                    <TouchableHighlight onPress={props.selectImage}>
                        <Text>Add a photo</Text>
                    </TouchableHighlight>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active type="Feather" name="video" />
                    </Button>
                </Left>
                <Body>
                    <Text>Record a video</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active type="Feather" name="music" />
                    </Button>
                </Left>
                <Body>
                    <Text>Audio</Text>
                </Body>
                <Right>
                    <Icon active name="arrow-forward" />
                </Right>
            </ListItem>
        </View>
    );


    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button style={{marginTop: 200}} onPress={() => sheetRef.current.snapTo(0)} transparent>
                <Icon name="more-horizontal" type="Feather"/>
            </Button>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[200, 210, 100, 0]}
                renderContent={renderContent}
                initialSnap={1}
                // enabledGestureInteraction={false}
            />
        </View>
    );
}

