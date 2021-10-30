import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileNeedAccessments({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => (
    <Icon
      {...props}
      name="checkmark-circle-2"
      fill={theme["color-success-default"]}
    />
  );
  const undoneIcon = (props) => <Icon {...props} name="minus-circle" />;

  return (
    <Layout title="Need accessments" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Personal care"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Everyday activities"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Administrative"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Medical"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Social support"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Environmental"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
        />
        <Divider />
        <ListItem
          title="Psychological"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() => navigation.navigate("ClientCareProfileNDPersonalCare")}
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
