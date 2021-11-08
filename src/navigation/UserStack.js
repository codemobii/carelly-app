import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import Notifications from "../screens/notifications/Index";

export default UserStack = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, title: "" }}
        name="Back"
        component={BottomNavigator}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerStyle: { backgroundColor: "#50CCCC" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />
    </Stack.Navigator>
  );
};
