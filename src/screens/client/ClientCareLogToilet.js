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

export default function ClientCareLogToilet({ navigation }) {
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
            What would you like to report?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
            style={{ marginBottom: 15 }}
          >
            Toilet visit
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
            style={{ marginBottom: 15 }}
          >
            Catheter
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
            style={{ marginBottom: 15 }}
          >
            Incontinence pad
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
            style={{ marginBottom: 15 }}
          >
            Stoma bag
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
