import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Input, Button } from 'react-native-ui-kitten'
import { Icon, Header} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { withFirebaseHOC } from './utils'

class AddPost extends Component {
    state = { image: null, title: '', description: '' }

    onChangeTitle = title => {
        this.setState({ title })
    }
    onChangeDescription = description => {
        this.setState({ description })
    }

    onSubmit = async () => {
        try {
            const post = {
                photo: this.state.image,
                title: this.state.title,
                description: this.state.description
            }
            this.props.firebase.uploadPost(post)

            this.setState({
                image: null,
                title: '',
                description: ''
            })
        } catch (e) {
            console.error(e)
        }
    }
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    selectImage = async () => {
        try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);
            this.setState({ image: result.uri });
    }
        catch(e){
            console.log(e);
        }
    };
    
    cancelImage = () => {
        this.setState({ image: null })
    };

    render() {
        return (
            <View style={{ flex: 1, marginTop: 60 }}>
                <ScrollView>
                <View>
                    {this.state.image ? (
                        <View>
                            <Icon onPress={this.cancelImage} style={{ color: "black", left: 10, margin: 5 }} name='x-circle' type="Feather"/>
                            <Image
                                source={{uri: this.state.image}}
                                style={{ width: '100%', height: 300 }}
                            />
                        </View>
                    ) : 
                            null
                        }
                </View>
                <View style={{ marginTop: 80, alignItems: 'center' }}>
                    <Text category='h4'>Post Details</Text>
                    <Input
                        placeholder='Enter title of the post'
                        style={{ margin: 20 }}
                        value={this.state.title}
                        onChangeText={title => this.onChangeTitle(title)}
                    />
                    <Input
                        placeholder='Enter description'
                        style={{ margin: 20 }}
                        value={this.state.description}
                        onChangeText={description => this.onChangeDescription(description)}
                    />
                    <Button
                        onPress={this.selectImage}
                        title="Add image"
                        style={{
                            alignItems: 'center',
                            padding: 10,
                            margin: 30,
                        }}>
                        {"Add image"}
                    </Button>
                    <Button 
                        status='success' 
                        onPress={this.onSubmit} 
                        title="Add post">
                        {"Add post"}   
          </Button>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default AddPost