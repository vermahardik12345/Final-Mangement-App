import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Welcome from './screens/welcome';
import LogIn from './screens/logIn';
import dashboard from './screens/dashboard';
import Expense from './screens/expense';
import Income from './screens/Income';
import { AppDrawerNavigator } from './components/appDrawer';
import TabNavigator from './components/TabNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default class App extends React.Component{
 render(){
    return (

<SafeAreaProvider>
 
<AppContainer/>
</SafeAreaProvider>


    
   );
    }
 
}
const Navigator = createSwitchNavigator({

 Welcome:{screen:Welcome},
 Login:{screen:LogIn},
 TabNavigator:{screen:TabNavigator},

 Expense:{screen:Expense},
 Income:{screen:Income},
  Drawer:{screen:AppDrawerNavigator}

  
  

 })

const AppContainer =  createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});