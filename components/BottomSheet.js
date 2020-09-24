import React, { useRef } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { ListItem, Button ,Text, Icon, Left, Body, Right, Switch } from 'native-base';


export default function Example() {
    const refRBSheet = useRef();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} >
                <Text>{"..."}</Text>
            </Button>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                open={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="camera" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Add a photo</Text>
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
                        <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </RBSheet>
        </View>
    );
}
