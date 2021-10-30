import {
  Avatar,
  Divider,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileCareCircle({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Care circle" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Samuel Stone"
          accessoryLeft={(props) => (
            <Avatar
              size="giant"
              source={{
                uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
              }}
            />
          )}
          onPress={() =>
            navigation.navigate("ClientCareProfileCareCircleDetails")
          }
        />
        <Divider />
        <ListItem
          title="Felix Smith"
          accessoryLeft={(props) => (
            <Avatar
              size="giant"
              source={{
                uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
              }}
            />
          )}
          onPress={() =>
            navigation.navigate("ClientCareProfileCareCircleDetails")
          }
        />
        <Divider />
        <ListItem
          title="Invite members"
          accessoryLeft={(props) => (
            <Icon {...props} name="plus-circle-outline" />
          )}
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
