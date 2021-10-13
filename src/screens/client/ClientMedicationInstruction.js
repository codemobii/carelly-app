import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientMedicationInstruction({ navigation }) {
  return (
    <Layout title="Instructions" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Blister pack - Dose #2
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Please read the information below carefully
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Text style={{ lineHeight: 24 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>

          <Text style={{ lineHeight: 24, marginTop: 8 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientDoseRecord")}>
          Record dose
        </Button>
      </View>
    </Layout>
  );
}
