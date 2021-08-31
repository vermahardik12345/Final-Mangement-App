import React from 'react';
import { Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import dashboard from '../screens/dashboard';
import Review from '../screens/review'
import Profile from '../screens/profile'
import About from '../screens/developer';
const TabNavigator = createBottomTabNavigator({
  
  dashboard:{
    screen:dashboard,
    navigationOptions:{
      tabBarIcon:<Image source={{
      uri:'https://img.icons8.com/clouds/2x/home-page.png'}}
       style={{ width: 65, height: 65 }}/>,
       tabBarLabel:"dashboard"
    }
  },
  review:{
    screen:Review,
    navigationOptions:{
      tabBarIcon:<Image source={{
      uri:'https://image.flaticon.com/icons/png/512/651/651191.png'}}
       style={{ width: 35, height: 35 }}/>,
       tabBarLabel:"Review"
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarIcon:<Image source={{
      uri:'https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png'}}
       style={{ width: 25, height: 25,marginTop:-5 }}/>,
       tabBarLabel:"Profile"
    }
  },
  Devleoper:{
    screen:About,
    navigationOptions:{
      tabBarIcon:<Image source={{
      uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN-H6o4wRKd0kdYT9mUdC78cTkjXazvE17A&usqp=CAU'}}
       style={{ width: 30, height: 30,marginTop:5 }}/>,
       tabBarLabel:"Developer"
    }
  },
 
})
export default TabNavigator;