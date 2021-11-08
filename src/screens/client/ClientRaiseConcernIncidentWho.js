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

export default function ClientRaiseConcernIncidentWho({ navigation, route }) {
  const theme = useTheme();

  const checkBox = (props) => <CheckBox {...props} />;

  return (
    <Layout title="Raise concern" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Who should see this concern?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Private"
          description="Only care managers will see this concern."
          accessoryLeft={checkBox}
        />
        <Divider />
        <ListItem
          title="Public"
          description="Care managers, family members and other members will see this concern."
          accessoryLeft={checkBox}
        />
      </ScrollView>

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onPress={() => navigation.navigate("ClientRaiseConcernIncident")}
        >
          Next
        </Button>
      </View>
    </Layout>
  );
}
