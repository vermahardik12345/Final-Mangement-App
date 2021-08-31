import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Image, ScrollView} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';
import React from 'react';
import firebase, { storage } from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-elements';
import {Icon} from 'react-native-elements';
import db from '../config';
import { RFValue } from "react-native-responsive-fontsize";
import { Input } from 'react-native-elements';
export default class Menu extends React.Component{
    constructor(){
        super();
        this.state={
            img:'#',
            userId:firebase.auth().currentUser.email,
            firstName:'',
            lastName:'',
            address:'',
            mobileNum:'',
            emailId:'',
            docId:''
        }
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
              console.log(doc.data().email_id)
          var data = doc.data()
            this.setState({
              emailId   : data.email_id,
              firstName : data.first_name,
              lastName  : data.last_name,
              address   : data.address,
              mobileNum   : data.mobile_num,
              docId     : doc.id
            })
          });
        })
      }

    
    uploadimage=async(uri,imagename)=>{
        var response=await fetch(uri)
        var blob=await response.blob();
        const ref=firebase.storage().ref().child("user_profile"+imagename)
    
        return ref.put(blob).then((response)=>{
            this.fetchimage(imagename)
        })
    }

    fetchimage=async(imagename)=>{
        const storageref= firebase.storage().ref().child("user_profile"+imagename)

        //get the downlaod url
    storageref
    .getDownloadURL()
    .then((url)=>{this.setState({img:url})
    })
    .catch((error)=>{
        this.setState({image:'#'})
    } 
    )
    }
    updateUserDetails=()=>{
      db.collection('users').doc(this.state.docId)
      .update({
        "first_name": this.state.firstName,
        "last_name" : this.state.lastName,
        "mobile_num"   : this.state.mobileNum,
        'email_id':this.state.emailId
      })
  
      alert("Profile Updated Successfully")
  
    }


    selectimage=async()=>{
       const{cancel,uri}=await ImagePicker.launchImageLibraryAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.All,
           allowsEditing:true,
           aspect:[4,5],
           quality:1


       })
       if(!cancel){
         this.uploadimage(uri,this.state.userId)
       }

    }
    componentDidMount(){
        this.fetchimage(this.state.userId)
         this.getUserDetails()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
           <Text style={{marginLeft:160,marginTop:70,color:'#6495ed'}}>Profile</Text>

            <Avatar
            rounded
            source={{
             uri:this.state.img
            }}
            size={'large'}
            onPress={
                ()=>{
                this.selectimage()
                }
            }
            showEditButton
            containerStyle={{marginLeft:140,marginTop:70}}
            />
              
            
            <Text style={{fontSize:RFValue(15),color:'#6495ed',marginTop:40,marginLeft:10}}>User Information</Text>
           <Input
  
           label="First Name"
           labelStyle={{marginTop:20}}
           inputContainerStyle={{marginLeft:0,width:130,marginTop:-100}}
           inputStyle={{marginTop:100}}
           value={this.state.firstName}
           onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
           />
         <Input
         label='Last Name'
         labelStyle={{marginTop:-89,marginLeft:170}}
         inputStyle={{marginTop:0.1}}
         inputContainerStyle={{width:150,marginLeft:170}}
         value={this.state.lastName}
         onChangeText={(text)=>
            {
            this.setState({
              lastName: text
            })
          }}
         />
         
         <Input
         label="Email"
         value={this.state.emailId}
         onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
         />
        <Input
        label='Phone'
        value={this.state.mobileNum}
        onChangeText={(text)=>{
            this.setState({
              mobileNum: text
            })
          }}
        />
         
        <TouchableOpacity style={{backgroundColor:'#5A62D7',borderRadius:4,height:40,width:250,marginLeft:60}} onPress={()=>{
            this.updateUserDetails()
        }}>
        <Text style={{color:"white",marginTop:7,marginLeft:110}}>Save</Text>
        </TouchableOpacity> 
        </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },

logoutbutton:{
        width:'85%',
        height:30,
        justifyContent:"center",
 
        marginTop:30,
        marginLeft:20
    },
    text:{
fontSize:20,
fontWeight:"bold",
color:"black"
    },
    avatarImage:{
        flex: 1,
        width: "25%",
        height: "0%",
        marginLeft: 70,
        marginTop: 30,
        borderRadius: 40,
        

    },
    drawerItemsContainer: {
        flex: 0.8,
        backgroundColor:'#ffffcc',
        
      },

}
)