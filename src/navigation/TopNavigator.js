import React from 'react';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, } from 'react-navigation'; // Version can be specified in package.json

import { Feather } from "@expo/vector-icons";
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
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
const DetalStack = createStackNavigator({
  Detail: DetailsScreen,
}, {
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: 'Detail',
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

const Topbar = createAppContainer(createMaterialTopTabNavigator({
  HomeStack,
  DetalStack
}));

export default Topbar;