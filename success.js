/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
import firebase from 'firebase';

export class success extends Component {
    static navigationOptions = {
        title: 'ผลการเช็คชื่อ',
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    
    
    componentWillMount(){
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
        var status = "กรุณารอสักครู่"
        var currentdate = new Date();
        var num = this.props.navigation.state.params.num;
        var date = currentdate.getDate() + "-"
            + (currentdate.getMonth() + 1) + "-"
            + currentdate.getFullYear()
        firebase.database().ref(currentUser.uid+"/"+this.props.navigation.state.params.courseName).child(num).set({

            Id: num,
            date: date
        }).then(() => {
            status=`เช็คชื่อ'${num}'แล้ว`;
            console.log("asd")
        }).catch((error) => {
            status="เกิดข้อผิดพลาด";
            console.log("asssd")
        })
    }




    render() {
        
        const { navigate } = this.props.navigation;
        var status=`เช็คชื่อ'${this.props.navigation.state.params.num}'แล้ว`;
        return (
            <View >
                <Text style={styles.welcome}>
                    {status}
                </Text>


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
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'green'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('success', () => success);
