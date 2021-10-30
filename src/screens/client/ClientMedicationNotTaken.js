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

export default function ClientMedicationNotTaken({ navigation, route }) {
  const theme = useTheme();

  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Which medications weren't taken?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select all medications that were not taken
          </Text>
        </View>
        <Divider />
        <MedicationDoseCard />
        <Divider />
        <MedicationDoseCard />
        <Divider />
        <MedicationDoseCard />
        <Divider />
        <MedicationDoseCard />
      </ScrollView>

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onPress={() => navigation.navigate("ClientMedicationNotAdministered")}
        >
          Confirm selection
        </Button>
      </View>
    </Layout>
  );
}
