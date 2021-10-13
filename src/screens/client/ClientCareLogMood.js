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

export default function ClientCareLogMood({ navigation }) {
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
            What mood were they in?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select the option that best reflect Eadmeads mood during your visit
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
            style={{ marginBottom: 15 }}
          >
            Happy
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
            style={{ marginBottom: 15 }}
          >
            Okay
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
            style={{ marginBottom: 15 }}
          >
            Sad
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
            style={{ marginBottom: 15 }}
          >
            Bord
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
