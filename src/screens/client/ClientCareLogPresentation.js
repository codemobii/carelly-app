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
import MedicationDoseCard from "../../components/MedicationDoseCard";
import TaskCard from "../../components/TaskCard";
import Layout from "../../layouts/Index";

export default function ClientCareLogPresentation({ navigation, route }) {
  const theme = useTheme();

  const checkBox = (props) => <CheckBox {...props} />;

  return (
    <Layout title="Living skills" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            What is client's presentation?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select the option that best reflect Client's presentation during
            your visit
          </Text>
        </View>
        <Divider />
        <ListItem title="Presentable" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Hygenic" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Clean" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Groomed" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Appropriately dressed" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="None engagement" accessoryLeft={checkBox} />
      </ScrollView>

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCareLogAddNote")}>
          Confirm selection
        </Button>
      </View>
    </Layout>
  );
}
