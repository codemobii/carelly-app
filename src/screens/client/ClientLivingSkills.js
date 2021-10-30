import {
  CheckBox,
  Divider,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import MedicationDoseCard from "../../components/MedicationDoseCard";
import TaskCard from "../../components/TaskCard";
import Layout from "../../layouts/Index";

export default function ClientLivingSkills({ navigation, route }) {
  const theme = useTheme();

  const checkBox = (props) => <CheckBox {...props} />;

  return (
    <Layout title="Living skills" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            What client’s little living skills have improved?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Tick skills below which you have seen improvement on today.
          </Text>
        </View>
        <Divider />
        <ListItem title="Managing Medication" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Cleaning Skills" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Managing Correspondence " accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Managing Activities" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Managing Addictions" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Shopping Skills" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Meetings" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Managing Relationship" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Peers Safety & Security" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Cooking Skills" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Appointments" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Employment" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Supported" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Manage Budget" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Laundery Skills" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="1:1" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Social Skills" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Manage Finances" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Manage Transport" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Supported" accessoryLeft={checkBox} />
        <Divider />
        <ListItem title="Training" accessoryLeft={checkBox} />
      </ScrollView>

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onPress={() => navigation.navigate("ClientLivingSkillsAddNote")}
        >
          Confirm selection
        </Button>
      </View>
    </Layout>
  );
}
