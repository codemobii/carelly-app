import React from "react";
import { Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import Visits from "../screens/client/Visits";
import ClientVisitLog from "../screens/client/ClientVisitLog";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/client/Dashboard";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export default ClientsStack = ({ navigation }) => {
  const theme = useTheme();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: { backgroundColor: "#50CCCC" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "600" },
      }}
    >
      <Stack.Screen
        name="HomeStack"
        options={{
          title: "Home",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              style={{ position: "relative" }}
            >
              <Icon style={{ width: 24, height: 24 }} name="bell" fill="#fff" />
              <View
                style={{
                  paddingVertical: 3,
                  paddingHorizontal: 8,
                  backgroundColor: "red",
                  borderRadius: 100,
                  position: "absolute",
                  top: -8,
                  right: -8,
                }}
              >
                <Text style={{ fontSize: 12, color: "#fff" }}>2</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
        component={Dashboard}
      />
      <Stack.Screen name="Visits" component={Visits} />
      <Stack.Screen
        name="ClientVisitLog"
        component={ClientVisitLog}
        options={{
          title: "Care monitoring",
        }}
      />
    </Stack.Navigator>
  );
};
