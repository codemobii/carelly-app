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

export default function NewDirectMessage({ navigation }) {
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
            padding: 15,
            // paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">Recent contacts</Text>
        </View>
        <MessageCard
          onPress={() => navigation.navigate("MessageBoard")}
          description=""
        />
        <Divider />
        <MessageCard isRead user="Mary Sims" description="" />

        <View
          style={{
            padding: 15,
            // paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">All contacts</Text>
        </View>
        <MessageCard
          onPress={() => navigation.navigate("MessageBoard")}
          description=""
        />
        <Divider />
        <MessageCard isRead user="Mary Sims" description="" />
        <Divider />
        <MessageCard mCount={7} user="Essien Bassey" description="" />
        <Divider />
        <MessageCard user="Shirai Subaru" description="" />
        <Divider />
        <MessageCard user="Vim Subaru" description="" />
        <Divider />
        <MessageCard user="Tim Subaru" description="" />
      </ScrollView>
    </Layout>
  );
}
