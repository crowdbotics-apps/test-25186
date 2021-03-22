import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList217267Navigator from '../features/NotificationList217267/navigator';
import Settings217266Navigator from '../features/Settings217266/navigator';
import Settings217258Navigator from '../features/Settings217258/navigator';
import UserProfile217256Navigator from '../features/UserProfile217256/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList217267: { screen: NotificationList217267Navigator },
Settings217266: { screen: Settings217266Navigator },
Settings217258: { screen: Settings217258Navigator },
UserProfile217256: { screen: UserProfile217256Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
