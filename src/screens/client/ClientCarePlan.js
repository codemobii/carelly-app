import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientCarePlan({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Care plan" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Select a session
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Stefania has 3 sessions today, select which one you'd like to
            complete task for.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Morning"
          description="0 of 8 tasks completed"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientTasks", {
              session: "Morning",
            })
          }
        />
        <Divider />
        <ListItem
          title="Lunch"
          description="0 of 12 tasks completed"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientTasks", {
              session: "Lunch",
            })
          }
        />
        <Divider />
        <ListItem
          title="Evening"
          description="0 of 3 tasks completed"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientTasks", {
              session: "Evening",
            })
          }
        />
      </ScrollView>
    </Layout>
  );
}
