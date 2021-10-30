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
          <OutlineButton
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            icon={require("../../../assets/images/hightemperature.png")}
          >
            High temperature
          </OutlineButton>
          <OutlineButton
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            icon={require("../../../assets/images/cough.png")}
          >
            Continuous cough
          </OutlineButton>
          <OutlineButton
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            icon={require("../../../assets/images/smell.png")}
          >
            Loss or change to your sense of smell or taste
          </OutlineButton>
          <OutlineButton
            onPress={() => navigation.navigate("ClientCareLogCovidAddNote")}
            icon={require("../../../assets/images/normaltemperature.png")}
          >
            Normal body temperature, no concern
          </OutlineButton>
        </View>
      </ScrollView>
    </Layout>
  );
}
