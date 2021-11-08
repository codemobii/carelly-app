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

export default function ClientCareLogBehaviour({ navigation, route }) {
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
            What is client's behaviour?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select the option that best reflect Client's behaviour during your
            visit
          </Text>
        </View>
        <Divider />
        <ListItem title="Stable" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Deteriorated" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Improved" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Challenging behaviour" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Challenging physical" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Attention seeking" accessoryLeft={checkBox} />
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
