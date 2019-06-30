
import React, { Component } from 'react'
import DrawerNav from "./src/navigation/DrawerNavigation";
import { StatusBar } from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setHidden(true)
    return (
        <DrawerNav>

          </DrawerNav>
    )
  }
}


