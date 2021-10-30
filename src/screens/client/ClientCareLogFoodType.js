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

export default function ClientCareLogFoodType({ navigation }) {
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
            How was the food delivered
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            size="giant"
            onPress={() => navigation.navigate("ClientCareLogFoodAddedList")}
            style={{ marginBottom: 15 }}
          >
            Take away
          </Button>
          <Button
            appearance="outline"
            size="giant"
            onPress={() => navigation.navigate("ClientCareLogFoodAddedList")}
            style={{ marginBottom: 15 }}
          >
            Home made
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
