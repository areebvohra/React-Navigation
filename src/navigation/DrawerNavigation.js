
import { createAppContainer, createDrawerNavigator, } from 'react-navigation'; // Version can be specified in package.json

import Bottom from '../navigation/BottomNavigatior'


const MyDrawerNavigator = createDrawerNavigator({
    Home: Bottom
  });
  
  
  
  export default createAppContainer(createDrawerNavigator({
    MyDrawerNavigator,
  }));