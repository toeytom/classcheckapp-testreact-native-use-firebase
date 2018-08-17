/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
import firebase from 'firebase';

export class createclass extends Component {
   
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }



    render() {
        

        const { navigate } = this.props.navigation;
        return (
            <View >
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="กรอกข้อมูลการเช็คชื่อ"
                />
                <Button
                    // onPress={onPressLearnMore}
                    title="บันทึกข้อมูล"
                    color="#841584"
                    accessibilityLabel="บันทึกข้อมูล"
                    onPress={() => {
                        
                        // var newPostKey = firebase.database().ref().push().key;

                        // var num = this.state.text
                        var currentdate = new Date();
                        var date = currentdate.getDate() + "-"
                            + (currentdate.getMonth() + 1) + "-"
                            + currentdate.getFullYear() ;
                           
                        firebase.database().ref(this.state.currentUser.uid+"/"+this.state.text).set({
                           createAt: date
                        }).then(() => {
                            navigate('main');
                        }).catch((error) => {
                            console.log(error);
                        })
                       
                    
                            
                            
                        
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

AppRegistry.registerComponent('createclass', () => createclass);
