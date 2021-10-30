import { Divider, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function NewGroupChat({ navigation }) {
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
            Create a team
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Teams are where your team communicates. They’re best when organized
            around a topic — #leads, for example.
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Input label="Team name" placeholder="" />
          <Input
            label="Send invites to: (optional)"
            placeholder=""
            marginTop={15}
          />
        </View>
      </ScrollView>
      <View style={{ padding: 20, backgroundColor: "#fff" }}>
        <Button>Submit</Button>
      </View>
    </Layout>
  );
}
