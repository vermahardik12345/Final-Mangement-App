import React  from 'react';
import { StyleSheet,Image,Text,TouchableOpacity, View } from 'react-native';

export default class About extends React.Component{
    render(){
        return(
            <View>
                <Text style={{marginTop:70,marginLeft:130}}>About the develpoer</Text>
                <Image
                source={require('../assets/i.jpeg')}
                style={{height:200,width:350,marginLeft:4,marginTop:60}}

                />
                <Text style={{marginLeft:100,marginTop:40}}>Mesaage from the developer:-</Text>
                <Text style={{marginTop:30,marginLeft:10}}> Hi,Hardik this side. Thank you for using the app! Hope you have a seamless experience till now. This app is aimed for the people who are terrible at finance. This app is an all in one solution for  the mangement of  finances. Pls report any glitch or bug in the review section to help me create a wonderful experience for you. </Text>
                <Text style={{marginLeft:10,fontSize:20,marginTop:10}}>Contact:</Text>
                <Text style={{marginLeft:10,marginTop:20}}>E-mail:pooja78v@gmail.com</Text>
            </View>
        )
    }
}