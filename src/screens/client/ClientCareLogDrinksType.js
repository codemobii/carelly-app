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

export default function ClientCareLogDrinkType({ navigation }) {
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
            What type of drink did they have?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            If you're unsure select regular
          </Text>
        </View>
        <Divider />
        <View style={{ padding: 15 }}>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogDrinkHowMuch")}
            style={{ marginBottom: 15 }}
          >
            Regular
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogDrinkHowMuch")}
            style={{ marginBottom: 15 }}
          >
            Caffeinated
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate("ClientCareLogDrinkHowMuch")}
            style={{ marginBottom: 15 }}
          >
            Alcoholic
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
