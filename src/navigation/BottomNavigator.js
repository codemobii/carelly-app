import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  Icon,
} from "@ui-kitten/components";
import Dashboard from "../screens/client/Dashboard";
import Clients from "../screens/client/Clients";
import ProfileMain from "../screens/profile/Index";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {
  return (
    <>
      <Divider />
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
        appearance="noIndicator"
      >
        <BottomNavigationTab
          title="Home"
          icon={(props) => <Icon {...props} name="home" />}
        />
        <BottomNavigationTab
          title="Clients"
          icon={(props) => <Icon {...props} name="pin" />}
        />
        <BottomNavigationTab
          title="Profile"
          icon={(props) => <Icon {...props} name="person" />}
        />
      </BottomNavigation>
    </>
  );
};

const TabNavigator = () => (
  <Navigator headerMode="none" tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      options={{ headerShown: false }}
      name="Home"
      component={Dashboard}
    />
    <Screen
      name="Clients"
      options={{ headerShown: false }}
      component={Clients}
    />
    <Screen
      name="Profile"
      options={{ headerShown: false }}
      component={ProfileMain}
    />
  </Navigator>
);

export const BottomNavigator = () => <TabNavigator />;
