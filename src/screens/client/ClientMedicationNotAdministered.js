import {
  Button,
  Divider,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientMedicationNotAdministered({ navigation }) {
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
            Was the blister pack dose administered?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientMedicationAddNote")}
            style={{ marginBottom: 15 }}
          >
            Refused
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientMedicationAddNote")}
            style={{ marginBottom: 15 }}
          >
            Destroyed
          </Button>
          <Button
            appearance="outline"
            style={{ marginBottom: 15 }}
            onPress={() => navigation.navigate("ClientMedicationAddNote")}
          >
            Nausea and vomiting
          </Button>
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Missing medication
          </Button>
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Medication error
          </Button>
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Other
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
