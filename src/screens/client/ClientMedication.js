import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import MedicationCard from "../../components/MedicationCard";
import Layout from "../../layouts/Index";

export default function ClientMedication({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Today's medications" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ padding: 15 }} category="s1">
          Morning
        </Text>
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />

        <Text style={{ padding: 15 }} category="s1">
          Lunch
        </Text>
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />

        <Text style={{ padding: 15 }} category="s1">
          Evening
        </Text>
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />
        <MedicationCard navigation={navigation} />
      </ScrollView>
    </Layout>
  );
}
