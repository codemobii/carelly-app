import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileRiskAssessment({ navigation }) {
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
    <Layout title="Risk Assessments" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <ListItem
          title="Environmental"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Mental capacity"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Moving and handling"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Waterlow"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Communication"
          accessoryRight={moreIcon}
          accessoryLeft={doneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Financial"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Medication"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="End of life"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Restrictive practice"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="COVID 19"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Behaviour"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Seizures"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Control of Substances Hazardious to Health (COSHH)"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Condition specific"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
        />
        <Divider />
        <ListItem
          title="Medication"
          accessoryRight={moreIcon}
          accessoryLeft={undoneIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileRAEnvironmental")
          }
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
