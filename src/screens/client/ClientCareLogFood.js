import { Button, Divider, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Layout from "../../layouts/Index";

export default function ClientCareLogFood({ navigation }) {
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
            What did the client have today?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogFoodType")}
            style={{ marginBottom: 15 }}
          >
            Meal
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogFoodType")}
            style={{ marginBottom: 15 }}
          >
            Snack
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
