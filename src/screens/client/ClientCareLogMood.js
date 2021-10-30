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
import OutlineButton from "../../components/OutlineButton";
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
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
              icon={require("../../../assets/images/happy.png")}
            >
              Happy
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
              icon={require("../../../assets/images/mood.png")}
            >
              Okay
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
              icon={require("../../../assets/images/sad.png")}
            >
              Sad
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogMoodAddNote")}
              icon={require("../../../assets/images/bored.png")}
            >
              Bored
            </OutlineButton>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
