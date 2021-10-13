import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientCallToActions({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout
      title=""
      isBack
      navigation={navigation}
      accessoryRight="Raise concern"
      accessoryRightIcon="alert-triangle-outline"
      accessoryRightOnpress={() => navigation.navigate("ClientRaiseConcern")}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Visit with Stefania Eadmeads
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Select from the options below.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Checked in 2:12pm"
          accessoryRight={doneIcon}
          onPress={() => navigation.navigate("ClientCheckIn")}
        />
        <Divider />
        <ListItem
          title="Tasks"
          description="12 tasks scheduled today"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCarePlan")}
        />
        <Divider />
        <ListItem
          title="Medication"
          description="8 scheduled today"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientMedication")}
        />
        <Divider />
        <ListItem
          title="Care monitoring"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareLog")}
        />
        <Divider />
        <ListItem
          title="Care plan"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfile")}
        />
        <Divider />
        <ListItem
          title="Raise concern"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcern")}
        />
        <Divider />
        <ListItem
          title="Check out"
          accessoryRight={moreIcon}
          onPress={() => {
            Alert.alert("Are you sure you want to check-out?", "", [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Check out",
                onPress: () => navigation.navigate("ClientCheckout"),
                style: "default",
              },
            ]);
          }}
        />
      </ScrollView>

      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button>Submit report</Button>
      </View>
    </Layout>
  );
}