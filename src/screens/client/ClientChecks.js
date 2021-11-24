import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientChecks({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Day check in (2:12pm)"
          accessoryRight={doneIcon}
          accessoryLeft={(props) => <Icon {...props} name="log-in-outline" />}
          onPress={() => navigation.navigate("ClientNightCheckScanner")}
        />
        <Divider />
        <ListItem
          title="Night check in"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => <Icon {...props} name="log-in-outline" />}
          onPress={() => navigation.navigate("ClientNightCheckScanner")}
        />
      </ScrollView>
    </Layout>
  );
}
