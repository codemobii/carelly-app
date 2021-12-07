import React from "react";
import { Avatar, Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messaging from "../screens/messaging/Index";
import MessageBoard from "../screens/messaging/MessageBoard";
import MessageBoardProfile from "../screens/messaging/MessageBoardProfile";
import NewDirectMessage from "../screens/messaging/NewDirectMessage";
import NewGroupChat from "../screens/messaging/NewGroupChat";
import { View } from "react-native";
import ProfileMain from "../screens/profile/Index";
import CreatePIN from "../screens/profile/CreatePIN";

const { Navigator, Screen } = createStackNavigator();

export default ProfileStack = ({ navigation }) => {
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
        name="ProfileStack"
        options={{
          title: "Profile",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
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
        component={ProfileMain}
      />
      <Stack.Screen
        name="CreatePIN"
        options={{
          title: "App PIN",
        }}
        component={CreatePIN}
      />
    </Stack.Navigator>
  );
};
