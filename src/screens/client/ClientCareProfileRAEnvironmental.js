import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfileRAEnvironmental({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout
      title="Environmental and fire risk assessment"
      isBack
      navigation={navigation}
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
            Environmental and fire risk assessment
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          General
        </Text>

        <ClientInfoCard
          title="Rubbish"
          description="Concerns: yes, we are worried about the bin lid"
        />
        <Divider />
        <ClientInfoCard
          title="Medication storage"
          description="Concerns: yes
          Please make sure you check blister pack because sometimes it will be incorrect"
        />
        <Divider />
        <ClientInfoCard
          title="Keys to windows and doors"
          description="Concerns: yes
          They are rusty, be careful."
        />
        <Divider />
        <ClientInfoCard
          title="Parking"
          description="Concerns: yes
          we are worried about the concrete slab in the road"
        />
        <Divider />
        <ClientInfoCard
          title="Door bell"
          description="Concerns: yes
          it is bad"
        />
        <Divider />
        <ClientInfoCard title="Gas cut off point" description="Concerns: no" />
        <Divider />
        <ClientInfoCard
          title="Water cut off point"
          description="Concerns: yes
          We cannot find it.
          
          It's still not found."
        />
        <Divider />
        <ClientInfoCard
          title="Residents and regular visitors"
          description="Concerns: yes
          yes we are concerned about COVID 19 infections
          
          there will be a concern about fire and smoking in the house."
        />
        <Divider />
        <ClientInfoCard
          title="Pets"
          description="Concerns: yes
          He has a massive cat which is scary"
        />
        <Text style={{ padding: 15 }} category="s1">
          Entrance
        </Text>

        <ClientInfoCard
          title="Rubbish"
          description="Concerns: yes, we are worried about the bin lid"
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
