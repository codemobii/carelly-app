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
import ImagePicker from "../../components/ImagePicker";
import Layout from "../../layouts/Index";

export default function ClientCareLogMoodAddNote({ navigation }) {
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
            Is there anything else to add?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Please add any extra details below
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Input
            placeholder="Add your notes here . . ."
            multiline={true}
            textStyle={{ minHeight: 64 }}
          />

          <ImagePicker />
        </View>
      </ScrollView>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCallToAction")}>
          Add notes
        </Button>
      </View>
    </Layout>
  );
}
