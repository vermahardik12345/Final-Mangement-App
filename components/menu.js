import React from 'react';
import { View, Text, StyeSheet ,Alert,SafeAreaView} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase  from 'firebase';


export default class BarMenu extends React.Component{
    render(){
        return(
            <View>
            <DrawerItems {...this.props}/>
            </View>
        )
    }
}
