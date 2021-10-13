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

export default function ClientCheckoutUnable({ navigation }) {
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
            Unable to scan QR code?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Choose from the options below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCheckoutUnableAddNote")}
            style={{ marginBottom: 15 }}
          >
            The QR code was missing or damaged
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCheckoutUnableAddNote")}
            style={{ marginBottom: 15 }}
          >
            Unable to enter the property
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCheckoutUnableAddNote")}
            style={{ marginBottom: 15 }}
          >
            A different reason
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
