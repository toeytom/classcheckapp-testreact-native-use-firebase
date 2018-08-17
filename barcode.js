/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
import firebase from 'firebase';


export class Barcode extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    static navigationOptions = {
        title: 'สแกน BarCode',
    };

    

    render() {
        console.log( )
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>

                <BarcodeScanner
                    style={{ flex: 1 }}
                    onBarcodeRead={({ data, type }) => {
                        // handle your scanned barcodes here!
                        // as an example, we show an alert:
                       
                           
                    
                        var num = data.slice(5, 13)
                        navigate('success',{num: num,courseName:this.props.navigation.state.params.courseName});
                        // firebase.database().ref(date).child(num).set({
                            
                        //     Id: num,
                        //     date: date
                        // }).then(() => {
                        //     Alert.alert(`เช็คชื่อ'${num}'แล้ว`);
                        // }).catch((error) => {
                        //     Alert.alert(`เช็คชื่อไปแล้ว`);
                        // })
                    }}
                />
                <Button
                    // onPress={onPressLearnMore}
                    title="กรอกรหัสนิสิต"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() =>
                        navigate('form',{courseName:this.props.navigation.state.params.courseName})
                    }
                />
            </View>
        );
    }
}



AppRegistry.registerComponent('Barcode', () => Barcode);
