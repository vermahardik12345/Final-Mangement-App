import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import Santaanimation from '../components/santa';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import db from '../config';
import firebase  from 'firebase';
export default class Review extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:firebase.auth().currentUser.email,
      review:'',
      bestPart:""

    }
  }
  addReview=()=>{
   db.collection('review').add({
     'email':this.state.emailId,
     'review':this.state.review,
     'bestPart':this.state.bestPart

   })
   alert('Review submitted successfully')
  }
  render(){
    return(
      <View>
        <KeyboardAvoidingView>
        <Text style={{marginLeft:150,marginTop:50,fontSize:20}}>Review</Text>
      <Santaanimation/>
      <Input
      label="Review"
      labelStyle={{marginTop:-90}}
      containerStyle={{width:200,marginLeft:80,marginTop:-30}}
      inputStyle={{marginTop:-10}}
      leftIcon={
      <Icon
      name="pencil"
      type="font-awesome"
      
      />
      }
      onChangeText={(text)=>this.setState({review:text})}
      />
        <Input
      label="Best/Worst Part"
      labelStyle={{marginTop:0}}
      containerStyle={{width:200,marginLeft:80}}
      inputStyle={{marginTop:-10}}
      leftIcon={
      <Icon
      name="mobile"
      type="font-awesome"
      
      />
      }
      onChangeText={(text)=>this.setState({bestPart:text})}
      />
      <TouchableOpacity style={{backgroundColor:"#5A62D7",borderRadius:2,height:40,width:200,marginLeft:80,marginTop:30}} onPress={()=>{
        this.addReview()
      }}>
        <Text style={{color:"white",marginLeft:80,marginTop:10}}>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}