import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet,AppRegistry } from 'react-native'
import firebase from 'firebase';
export  class loading extends React.Component {

   
      componentDidMount() {
       
        var config = {
            apiKey: "AIzaSyB2H6ymWD-CP3Ekg6pJl4iUtqKMvsk7QlI",
            authDomain: "classcheck-9dadb.firebaseapp.com",
            databaseURL: "https://classcheck-9dadb.firebaseio.com",
            projectId: "classcheck-9dadb",
            storageBucket: "classcheck-9dadb.appspot.com",
            messagingSenderId: "124644259813"
          };
          firebase.initializeApp(config);
        
    
    
        
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'main' : 'login')
        })}
        
  render() {
      
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
AppRegistry.registerComponent('loading', () => loading );