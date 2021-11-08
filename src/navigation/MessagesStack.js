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

const { Navigator, Screen } = createStackNavigator();

export default MessagesStack = ({ navigation }) => {
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
        name="MessagesStack"
        options={{
          title: "Messages",
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
        component={Messaging}
      />
      <Stack.Screen
        name="MessageBoard"
        options={{
          title: "Job Kari",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageBoardProfile")}
            >
              <Avatar
                size="small"
                source={{
                  uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
                }}
              />
            </TouchableOpacity>
          ),
        }}
        component={MessageBoard}
      />
      <Stack.Screen
        name="MessageBoardProfile"
        options={{
          title: "",
        }}
        component={MessageBoardProfile}
      />
      <Stack.Screen
        name="NewDirectMessage"
        options={{
          title: "New chat",
        }}
        component={NewDirectMessage}
      />
      <Stack.Screen
        name="NewGroupChat"
        options={{
          title: "New team",
        }}
        component={NewGroupChat}
      />
    </Stack.Navigator>
  );
};
