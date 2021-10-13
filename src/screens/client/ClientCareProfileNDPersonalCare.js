import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileNDPersonalCare({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Personal care" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Personal care
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Date completed: september 24, 2021
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Assessor: Max Toons
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Bathing
        </Text>

        <ClientInfoCard
          title="Can Client wash themself?"
          description="No, fully dependent. Client needs all the help now."
        />

        <Text style={{ padding: 15 }} category="s1">
          Oral hygiene
        </Text>

        <ClientInfoCard
          title="Can Client maintain oral hygiene?"
          description="No, fully dependent. Client needs all the help now."
        />

        <Divider />
        <ClientInfoCard title="Does Client wear dentures?" description="No" />

        <Text style={{ padding: 15 }} category="s1">
          Personal appearance
        </Text>

        <ClientInfoCard
          title="Can Client maintain their personal apperance?"
          description="Yes, with help. He needs some help."
        />

        <Divider />
        <ClientInfoCard
          title="Can Client dress themself?"
          description="Yes, with help"
        />

        <Text style={{ padding: 15 }} category="s1">
          Toilet
        </Text>

        <ClientInfoCard
          title="Can Client toilet themself?"
          description="Yes, indenpent."
        />

        <Divider />
        <ClientInfoCard
          title="Does Client have control over their bowels"
          description="Yes, fully"
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
