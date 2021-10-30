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
              onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
              icon={require("../../../assets/images/toilet.png")}
            >
              Toilet visits
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
              icon={require("../../../assets/images/catheter.png")}
            >
              Catheter
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
              icon={require("../../../assets/images/pad.png")}
            >
              Incontinence pad
            </OutlineButton>
          </View>
          <View style={{ width: "48%" }}>
            <OutlineButton
              onPress={() => navigation.navigate("ClientCareLogToiletUrine")}
              icon={require("../../../assets/images/bag.png")}
            >
              Stoma bag
            </OutlineButton>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
