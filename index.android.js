/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert,Button } from 'react-native';

import {
  createStackNavigator,createSwitchNavigator
} from 'react-navigation';
import{form} from './form';
import{Barcode} from './barcode';
import{success} from './success';
import{login} from './login';
import{signup} from './signup';
import{main} from './main';
import{loading} from './loading';
import{createclass} from './createclass';


const auth = createStackNavigator({
  login: { screen: login},
  signup : { screen: signup},
})
const app = createStackNavigator({
  main: { screen: main},
  Barcode: { screen: Barcode },
  form: { screen: form },
  success: {screen: success},
  createclass: {screen: createclass}
  
})


const ClassCheck = createSwitchNavigator({
  loading : { screen: loading },
  auth : auth,
  app : app,
  
  
  
},
{
  initialRouteName: 'loading'
},

);



AppRegistry.registerComponent('ClassCheck', () => ClassCheck );
