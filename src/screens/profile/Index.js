import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import Layout from "../../layouts/Index";

export default function ProfileMain({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Profile" navigation={navigation}>
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
            <Avatar image="https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff" />
          </View>
          <Text style={{ marginTop: 6 }} category="s1">
            Max Philip
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Personal details
        </Text>

        <ProfileInfoCard
          label="Full name"
          info="Max Philip"
          icon="person-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Job role"
          info="Health Care Assistant"
          icon="briefcase-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Phone number"
          info="091310909090"
          icon="phone-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Email address"
          info="your@email.com"
          icon="email-outline"
        />

        <Text style={{ padding: 15 }} category="s1">
          Get help
        </Text>
        <ListItem
          title="Live chat"
          accessoryRight={(props) => (
            <Icon {...props} name="message-circle-outline" />
          )}
        />
        <Divider />
        <ListItem
          title="Contact support"
          accessoryRight={(props) => (
            <Icon {...props} name="phone-call-outline" />
          )}
        />
        <Divider />
        <ListItem
          title="FAQs"
          accessoryRight={(props) => (
            <Icon {...props} name="question-mark-circle-outline" />
          )}
        />

        <Text style={{ padding: 15 }} category="s1">
          Versions
        </Text>
        <ProfileInfoCard label="Application" info="1.0.0 - bpsls" />
      </ScrollView>
    </Layout>
  );
}
