import {
  Avatar,
  Button,
  Card,
  Divider,
  Icon,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import MessageCard from "../../components/MessageCard";
import Layout from "../../layouts/Index";

export default function Messaging({ navigation }) {
  const theme = useTheme();

  const data = require("../../data/visits.json");

  return (
    <Layout title="Clients">
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", padding: 15 }}>
          <Input
            placeholder="Search"
            renderIcon={(props) => <Icon {...props} name="search" />}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            // paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">Company messenger</Text>
          <Button
            appearance="ghost"
            onPress={() => navigation.navigate("NewDirectMessage")}
          >
            New
          </Button>
        </View>
        <MessageCard
          user="#General"
          description=""
          onPress={() => navigation.navigate("MessageBoard")}
        />
        <Divider />
        <MessageCard isRead user="#Team" description="" />

        <View
          style={{
            paddingHorizontal: 15,
            // paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">Direct messages</Text>
          <Button
            appearance="ghost"
            onPress={() => navigation.navigate("NewGroupChat")}
          >
            New
          </Button>
        </View>
        <MessageCard onPress={() => navigation.navigate("MessageBoard")} />
        <Divider />
        <MessageCard isRead user="Mary Sims" />
        <Divider />
        <MessageCard mCount={7} user="Essien Bassey" />
        <Divider />
        <MessageCard user="Shirai Subaru" />
      </ScrollView>
    </Layout>
  );
}
