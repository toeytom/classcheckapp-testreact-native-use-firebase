/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
import firebase from 'firebase';

export class form extends Component {
    static navigationOptions = {
        title: 'กรอกข้อมูล',
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }




    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="กรอกรหัสนิสิต"
                />
                <Button
                    // onPress={onPressLearnMore}
                    title="บันทึกข้อมูล"
                    color="#841584"
                    accessibilityLabel="บันทึกข้อมูล"
                    onPress={() => {
                        // var newPostKey = firebase.database().ref().push().key;

                        // var num = this.state.text
                        // var currentdate = new Date();
                        // var date = currentdate.getDate() + "/"
                        //     + (currentdate.getMonth() + 1) + "/"
                        //     + currentdate.getFullYear() + " @ "
                        //     + currentdate.getHours() + ":"
                        //     + currentdate.getMinutes() + ":"
                        //     + currentdate.getSeconds();
                        // firebase.database().ref(newPostKey).set({
                        //     Id: num,
                        //     date: date
                        // }).then(() => {
                        //     Alert.alert(`เช็คชื่อ'${num}'แล้ว`);
                        // }).catch((error) => {
                        //     console.log(error);
                        // })
                       
                    
                            var num = this.state.text
                            navigate('success', {num: num,courseName:this.props.navigation.state.params.courseName});
                        
                        // firebase.database().ref(date).child(num).set({
                            
                        //     Id: num,
                        //     date: date
                        // }).then(() => {
                        //     Alert.alert(`เช็คชื่อ'${num}'แล้ว`);
                        // }).catch((error) => {
                        //     Alert.alert(`เช็คชื่อไปแล้ว`);
                        // })
                    }
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('form', () => form);
