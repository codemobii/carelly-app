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

export default function ClientCareLogMentalHealth({ navigation, route }) {
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
            What is client's mental health?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select the option that best reflect Client's mental health during
            your visit
          </Text>
        </View>
        <Divider />
        <ListItem title="Stable" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Unstable" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Signs of relapse" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Subst/Acohol abuse" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Sleep pattern" accessoryLeft={checkBox} />
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
