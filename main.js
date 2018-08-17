import React from 'react'
import { StyleSheet, Platform, TextInput, View,AppRegistry,TouchableHighlight,Alert,TouchableOpacity,Modal } from 'react-native'
import firebase from 'firebase';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {Button, Text,Container, Footer, Content,Card,CardItem,Icon,Right, Item} from 'native-base';
export class main extends React.Component {
  constructor(props){
    super(props);
    this.state = {datacourse: []}
    

  }
  static navigationOptions = {
    title: 'รายการเช็คชื่อ',
};
  state = { currentUser: null }
 

 

  componentWillMount() {
    var that = this;
    this.setState({datacourse: []});
    console.log(this.state.datacourse+"dsad");
    const { currentUser } = firebase.auth()
    
    this.setState({ currentUser })
    firebase.database().ref(currentUser.uid).on("value", function(snapshot) {
      data=snapshot.val()
       dataval=[];
      for (i in data){
        dataval.push(i)
      }
      that.setState({datacourse: dataval})
      
   }, function (error) {
      console.log("Error: " + error.code);
   });    
  
  }






render() {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    
   

return (

  
  <Container>

        <Content>
        <Card>
        {
          this.state.datacourse.map((Item)=>
        (
          <CardItem button onPress={() =>{
            navigate('Barcode',{courseName: Item})
          }}>
          <Text>{Item.toString()}</Text>
          <Right>
          
               <Icon name="arrow-forward" />
             </Right>
            
          </CardItem>
        ))
        }
        
           </Card>
           
        </Content>
        <Footer style={{backgroundColor:"white"}}>
        <Button rounded success  onPress={() => {
             navigate('createclass');
          }} >
           <Text  style={{fontSize:25,textAlign:"center"}} >+เพิ่มรายการเช็คชื่อ
             </Text>
        </Button>
        </Footer>
        
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

})
AppRegistry.registerComponent('main', () => main );