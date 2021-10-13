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

export default function ClientCareLogDrink({ navigation }) {
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
            Did you see them drink?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Choose whether you saw them drink something or if you left a drink
            for them to have later
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogDrinkType")}
            style={{ marginBottom: 15 }}
          >
            Observed
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientMedicationAddNote")}
            style={{ marginBottom: 15 }}
          >
            Not observed
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
