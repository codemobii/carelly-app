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

export default function ClientRaiseConcern({ navigation, route }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

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
            What type of concern do you want to raise?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Accident"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcernIncident")}
        />
        <Divider />
        <ListItem
          title="Incident"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcernIncident")}
        />
        <Divider />
        <ListItem
          title="Medication"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcernLevel")}
        />
        <Divider />
        <ListItem
          title="Skin integrity"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcernLevel")}
        />
        <Divider />
        <ListItem
          title="Other"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcernLevel")}
        />
      </ScrollView>
    </Layout>
  );
}
