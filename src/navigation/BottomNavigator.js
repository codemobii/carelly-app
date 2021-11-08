import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";

import ProfileMain from "../screens/profile/Index";

import SvgUri from "react-native-svg-uri";
import { Icon, Text, useTheme } from "@ui-kitten/components";
import ClientsStack from "./ClientsStack";
import VisitsStack from "./VisitsStack";
import MessagesStack from "./MessagesStack";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavigator({ navigation }) {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerBackground: () => (
        //   <LinearGradient
        //     end={{ x: 0.2, y: 0.2 }}
        //     style={{ height: 80 }}
        //     colors={["#45AECA", "#50CCCC"]}
        //   />
        // ),

        headerStyle: { backgroundColor: "#50CCCC", height: 88 },
        headerTintColor: "#fff",
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../../assets/icons/Category.svg")
              : require("../../assets/icons/Category1.svg");
          } else if (route.name === "Clients") {
            iconName = focused
              ? require("../../assets/icons/Clients.svg")
              : require("../../assets/icons/Clients1.svg");
          } else if (route.name === "Messages") {
            iconName = focused
              ? require("../../assets/icons/Message.svg")
              : require("../../assets/icons/Message1.svg");
          } else if (route.name === "Profile") {
            iconName = focused
              ? require("../../assets/icons/Profile.svg")
              : require("../../assets/icons/Profile1.svg");
          }

          // You can return any component that you like here!
          return <SvgUri width={size} height={size} source={iconName} />;
        },
        tabBarActiveTintColor: theme["color-info-default"],
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontWeight: "bold" },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={VisitsStack}
      />
      <Tab.Screen
        name="Clients"
        options={{ headerShown: false }}
        component={ClientsStack}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{ tabBarBadge: 3, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileMain}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
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
      />
    </Tab.Navigator>
  );
}
