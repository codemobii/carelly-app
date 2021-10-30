import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileDocuments({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Documents" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Moving-and-Handling.pdf"
          accessoryLeft={(props) => <Icon {...props} name="file-outline" />}
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileDocumentViewer")}
        />
        <Divider />
        <ListItem
          title="Mov-Handling.pdf"
          accessoryLeft={(props) => <Icon {...props} name="file-outline" />}
          accessoryRight={moreIcon}
        />
        <Divider />
        <ListItem
          title="Mental-Report.pdf"
          accessoryLeft={(props) => <Icon {...props} name="file-outline" />}
          accessoryRight={moreIcon}
        />
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
