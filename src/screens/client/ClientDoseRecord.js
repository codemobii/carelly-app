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

export default function ClientDoseRecord({ navigation }) {
  return (
    <Layout title="Record dose" isBack navigation={navigation}>
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
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Fully taken
          </Button>
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Partially taken
          </Button>
          <Button
            appearance="outline"
            style={{ marginBottom: 15 }}
            onPress={() => navigation.navigate("ClientMedicationNotTaken")}
          >
            Not taken
          </Button>
          <Button appearance="outline" style={{ marginBottom: 15 }}>
            Not observed
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
