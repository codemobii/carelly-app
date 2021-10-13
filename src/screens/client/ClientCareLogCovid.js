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

export default function ClientCareLogCovid({ navigation }) {
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
            How is the client feeling?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Does client present any of the below symptoms.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            style={{ marginBottom: 15 }}
          >
            High temperature
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            style={{ marginBottom: 15 }}
          >
            Continuous cough
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            style={{ marginBottom: 15 }}
          >
            <Text style={{ textAlign: "center" }}>
              Loss or change to your sense of smell or taste
            </Text>
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            style={{ marginBottom: 15 }}
          >
            Normal body temperature, no concern
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
