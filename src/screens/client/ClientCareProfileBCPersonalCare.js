import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileBCPersonalCare({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Personal care" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ padding: 15 }} category="s1">
          Summary and outcomes
        </Text>

        <ClientInfoCard
          title=""
          description={`Make sure you are carefull with Client's back

Cliente likes bathe

The person is known for chhalleging behaviour and so please make sure that you aware of this.`}
        />

        <Text style={{ padding: 15 }} category="s1">
          Tasks
        </Text>

        <ClientInfoCard
          title="Assist to change into new clothes"
          description="Make sure you only use the clothes in the front room."
        />

        <Divider />
        <ClientInfoCard description="Assist when using the toilet" title="" />

        <Divider />
        <ClientInfoCard
          title="Assist to have strip wash"
          description="Make sure to get it done before lunch"
        />

        <Divider />
        <ClientInfoCard
          title="Assist with shaving"
          description="The shaver is electric -  no water use."
        />

        <Divider />
        <ClientInfoCard
          title="Assist to change incontinent pad"
          description="Incontinent pad is later."
        />

        <Divider />
        <ClientInfoCard
          title="Assist to have strip wash"
          description="There will be a risk."
        />

        <Divider />
        <ClientInfoCard
          title="Assist to change into night wear"
          description="Make sure they get into PJs."
        />

        <Divider />
        <ClientInfoCard
          title="Assist with jewellery"
          description="Make sure they wear ear rings all the time."
        />

        <Text style={{ padding: 15 }} category="s1">
          Risks and mitigations
        </Text>

        <ClientInfoCard
          title="Risk of slipping here"
          description="Do not have the floor wet."
        />

        <Divider />
        <ClientInfoCard title="Risk level" description="High" />

        <Divider />
        <ClientInfoCard
          title="Challenging behaviour"
          description="Make sure you are able to do X and Y when you get into the home."
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
