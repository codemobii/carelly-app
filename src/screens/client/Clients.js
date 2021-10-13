import {
  Avatar,
  Button,
  Card,
  Icon,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function Clients({ navigation }) {
  const theme = useTheme();

  const data = require("../../data/visits.json");

  return (
    <Layout title="Clients">
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", padding: 25 }}>
          <Input
            placeholder="Search clients"
            renderIcon={(props) => <Icon {...props} name="search" />}
          />
        </View>

        <View
          style={{
            padding: 25,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data?.map((item, index) => (
            <ClientCard key={index} item={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
