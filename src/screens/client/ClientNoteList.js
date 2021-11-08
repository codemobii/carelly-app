import { Divider, Icon, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import MessageCard from "../../components/MessageCard";
import NoteCard from "../../components/NoteCard";
import NotificationCard from "../../components/NotificationCard";
import Layout from "../../layouts/Index";

export default function ClientNoteList({ navigation }) {
  const theme = useTheme();

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
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">Today</Text>

          <Text category="p1">(2 notes)</Text>
        </View>
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />

        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text category="p1">Previous</Text>

          <Text category="p1">(10 notes)</Text>
        </View>
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
        <Divider />
        <NoteCard navigation={navigation} />
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientMakeNote")}>
          Make note
        </Button>
      </View>
    </Layout>
  );
}
