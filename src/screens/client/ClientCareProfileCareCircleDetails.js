import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import SectionTitle from "../../components/SectionTitle";
import Layout from "../../layouts/Index";

export default function ClientCareProfileCareCircleDetails({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Client profile" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <SectionTitle title="Profile" icon="person-outline" />

        <ClientInfoCard title="First name" description="Client" />

        <Divider />
        <ClientInfoCard title="Last name" description="Walsh" />

        <Divider />
        <ClientInfoCard title="Preferred name" description="Client" />

        <Divider />
        <ClientInfoCard title="Preferred pronoun" description="He/Him" />

        <Divider />
        <ClientInfoCard title="Date of birth" description="1982-12-12" />

        <Divider />
        <ClientInfoCard title="Gender" description="Male" />

        <SectionTitle title="Contact details" icon="phone-call-outline" />

        <ClientInfoCard title="Phone number" description="0909877212" />

        <Divider />
        <ClientInfoCard
          title="Address"
          description="No 21, Somewhere town, somewhere"
        />

        <Divider />
        <ClientInfoCard
          title="Access details"
          description="GitHub Universe is coming October 27 and 28. From product deep dives to interactive roundtables, you’ll gather the tips, tools, and connections to help you do the best work of your life."
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
