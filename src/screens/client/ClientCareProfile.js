import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ClientInfoCard from "../../components/ClientInfoCard";
import Layout from "../../layouts/Index";

export default function ClientCareProfile({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Care plan" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            padding: 25,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar image="https://cdn.pixabay.com/photo/2015/05/31/11/56/old-791360_960_720.jpg" />
          </View>
          <Text style={{ marginVertical: 5 }} category="s1">
            Stefania Eadmeads
          </Text>
          <Text style={{}} category="p2">
            78 years old
          </Text>
        </View>

        <Divider />
        <ClientInfoCard title="Preferred name" description="Client" />
        <Divider />
        <ClientInfoCard title="Preferred pronoun" description="He/Him" />
        <Divider />
        <ClientInfoCard
          title="Primary phone number"
          description="09032112321"
        />
        <Divider />
        <ClientInfoCard
          title="Address"
          description="N0. 21 street of somewhere"
        />
        <Divider />
        <ClientInfoCard
          title="Access details"
          description="We are the first gut microbiome & genetic 
          risk based precision care program proven to reduce weight & inflammatory illness."
        />
        <Divider />
        <ClientInfoCard title="GP" description="Dr. Adam Smith" />
        <Divider />
        <ListItem
          title="Highlights"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileInfo", {
              title: "Highlights",
            })
          }
        />
        <Divider />
        <ListItem
          title="About Client"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileAbout", {
              title: "About Client",
            })
          }
        />
        <Divider />
        <ListItem
          title="Need accessments"
          accessoryRight={moreIcon}
          onPress={() =>
            navigation.navigate("ClientCareProfileNeedAccessments", {
              title: "Need accessments",
            })
          }
        />
        <Divider />
        <ListItem
          title="Care plan by category"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientCareProfileByCategory")}
        />
        <Divider />
        <ListItem
          title="Risk accessments"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcern")}
        />
        <Divider />
        <ListItem
          title="Documents"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcern")}
        />
        <Divider />
        <ListItem
          title="Care circle"
          accessoryRight={moreIcon}
          onPress={() => navigation.navigate("ClientRaiseConcern")}
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
