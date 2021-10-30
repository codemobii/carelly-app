import {
  CheckBox,
  Divider,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import TaskCard from "../../components/TaskCard";
import Layout from "../../layouts/Index";

export default function ClientTasks({ navigation, route }) {
  const theme = useTheme();

  const { session } = route.params;

  return (
    <Layout title={`${session} tasks`} isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ textTransform: "lowercase" }} category="s1">
            Stefania's {session} session
          </Text>
          <Text style={{ color: "#ccc", marginTop: 5 }} category="p2">
            Progress
          </Text>
          <Text style={{ marginVertical: 5 }} category="p2">
            3 of 12 tasks completed
          </Text>
          <Progress.Bar
            color={theme["color-primary-default"]}
            progress={0.3}
            width={335}
          />
        </View>
        <Divider />
        <TaskCard isTag isDue />
        <Divider />
        <TaskCard />
        <Divider />
        <TaskCard isTag />
        <Divider />
        <TaskCard isTag />
        <Divider />
        <TaskCard />
        <Divider />
        <TaskCard isTag isDue />
        <Divider />
        <TaskCard />
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button>Submit report</Button>
      </View>
    </Layout>
  );
}
