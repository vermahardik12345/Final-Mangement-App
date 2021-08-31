import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import dashboard from '../screens/dashboard';
import BarMenu from './menu';

export const AppDrawerNavigator =createDrawerNavigator({
    Home:{
        screen:dashboard
    }
},
{
contentComponent:BarMenu
},

{
    initialRouteName:'Home'
})