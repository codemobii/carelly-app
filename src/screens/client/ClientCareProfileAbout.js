import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import SectionTitle from "../../components/SectionTitle";
import Layout from "../../layouts/Index";

export default function ClientCareProfileAbout({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Client profile" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <SectionTitle title="Profile" icon="person-outline" />

        <ClientInfoCard title="First name" description="Client" />

        <Divider />
        <ClientInfoCard title="Last name" description="Client" />

        <Divider />
        <ClientInfoCard title="Preferred name" description="Client" />

        <Divider />
        <ClientInfoCard title="Preferred pronoun" description="He/Him" />

        <Divider />
        <ClientInfoCard title="Date of birth" description="1982-12-12" />

        <SectionTitle title="Contact details" icon="phone-call-outline" />

        <ClientInfoCard title="Phone number" description="0909877212" />

        <Divider />
        <ClientInfoCard
          title="Address"
          description="No 21, Marks St. Festac, Lagos"
        />

        <Divider />
        <ClientInfoCard
          title="Access details"
          description="GitHub Universe is coming October 27 and 28. From product deep dives to interactive roundtables, you’ll gather the tips, tools, and connections to help you do the best work of your life."
        />

        <SectionTitle title="Sexuality" icon="people-outline" />

        <ClientInfoCard title="Gender" description="Male" />

        <SectionTitle title="Preferences" icon="info-outline" />

        <ClientInfoCard
          title="Dislikes"
          description={`From product deep dives to interactive roundtables, you’ll gather the tips, tools, and connections to help you do the best work of your life.`}
        />

        <Divider />
        <ClientInfoCard
          title="Routines and preferences"
          description={`Classic music
Hollywood fils
Rugby
Man U FC`}
        />

        <Divider />
        <ClientInfoCard
          title="Hobbies"
          description={`GitHub Universe is coming October 27 and 28. 

From product deep dives to interactive roundtables, you’ll gather the tips, tools, and connections to help you do the best work of your life.`}
        />

        <Divider />
        <ClientInfoCard
          title="Carer preferences"
          description="No preferences"
        />

        <SectionTitle title="Health details" icon="activity-outline" />

        <ClientInfoCard
          title="Medical history"
          description={`-Cancer
-Autonomic dysreflexia
-Parkinson diseases
-Diabetes type`}
        />

        <Divider />
        <ClientInfoCard
          title="Medicines support"
          description={`We provide Client's medicines support`}
        />

        <SectionTitle
          title="Allegies and intolerances"
          icon="thermometer-plus-outline"
        />

        <ClientInfoCard
          title=""
          description={`He has asthma and some hay fever`}
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
