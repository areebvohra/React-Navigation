import React from 'react';
import { createAppContainer,createStackNavigator, createBottomTabNavigator, } from 'react-navigation'; // Version can be specified in package.json

import { Feather } from "@expo/vector-icons";
import DetailsScreen from '../screens/Details';
import Topbar from './TopNavigator';


const HomeStack = createStackNavigator({
    Home: Topbar,
  }, {
        headerMode: "none",
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <Feather
                    focused={focused}
                    name="home"
                    size={22}
                    color={focused ? "#5F87E7" : "#9F9F9F"}
                />
            ),
        }
    }
  );
  
  const TaskStack = createStackNavigator({
    Tasks: DetailsScreen,
  }, {
        headerMode: "none",
        navigationOptions: {
            tabBarLabel: 'Details',
            tabBarIcon: ({ focused }) => (
                <Feather focused={focused} size={22} name='info'
                    color={focused ? "#5F87E7" : "#9F9F9F"}
                />
            ),
        }
    }
  );
  
  export default createBottomTabNavigator({
    HomeStack,
    TaskStack,
  });