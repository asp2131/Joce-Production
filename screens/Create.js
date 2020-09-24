import React, { Component } from 'react'
import { Image, View, Text, Button } from 'react-native'
import { Input } from 'react-native-ui-kitten'
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
    

    render() {
        return (
            <View style={{ flex: 1, marginTop: 60 }}>
                <View>
                    {this.state.image ? (
                        <Image
                            source={{uri: this.state.image}}
                            style={{ width: '100%', height: 300 }}
                        />
                    ) : (
                            null
                        )}
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
                            margin: 30
                        }}>

                    </Button>
                    <Button status='success' onPress={this.onSubmit} title="Add post">
                        
          </Button>
                </View>
            </View>
        )
    }
}

export default AddPost