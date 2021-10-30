import {
  Button,
  Divider,
  Input,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Layout from "../../layouts/Index";

export default function ClientCareLogToiletUrine({ navigation }) {
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
            How much urine was in the bag?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Enter the amount below.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Input placeholder="" textStyle={{ minHeight: 64 }} />
        </View>
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onPress={() => navigation.navigate("ClientCareLogToiletAddNote")}
        >
          Add urine output
        </Button>
      </View>
    </Layout>
  );
}
