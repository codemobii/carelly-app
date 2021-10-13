import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import Layout from "../../layouts/Index";

export default function ClientCareProfileInfo({ navigation, route }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  const { title } = route.params;

  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ padding: 15 }} category="s1">
          {title}
        </Text>

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Text style={{}} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
          <Text style={{ marginTop: 15 }} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
