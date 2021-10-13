import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileByCategory({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Care plan by category" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Personal care"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Everyday activities"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Administrative"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Medical"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Social support"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Environmental"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Psychological"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileBCPersonalCare")}
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
