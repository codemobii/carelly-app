import {
  Avatar,
  Button,
  Card,
  Divider,
  Icon,
  Input,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import MessageCard from "../../components/MessageCard";
import MessageItem from "../../components/MessageItem";
import Layout from "../../layouts/Index";

export default function MessageBoard({ navigation }) {
  const theme = useTheme();

  const data = require("../../data/visits.json");

  return (
    <Layout title="Clients">
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <MessageItem
          onPressAvatar={() => navigation.navigate("MessageBoardProfile")}
        />
        <MessageItem isAuthUser />
        <MessageItem />
        <MessageItem />
        <MessageItem isSameUser isImg />
      </ScrollView>

      <Divider />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 15,
        }}
      >
        <Button
          // size="small"
          style={{ padding: 0, height: 0, width: 0, borderRadius: 100 }}
          accessoryLeft={(props) => <Icon {...props} name="plus-outline" />}
        />
        <Input
          placeholder="Message . . ."
          style={{ width: "70%", marginHorizontal: 10 }}
        />
        <Button
          // size="small"
          style={{ padding: 0, height: 0, width: 0 }}
          accessoryLeft={(props) => <Icon {...props} name="paper-plane" />}
          appearance="ghost"
        />
      </View>
    </Layout>
  );
}
