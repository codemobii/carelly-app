import {
  Avatar,
  Button,
  Card,
  Divider,
  Icon,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import MessageCard from "../../components/MessageCard";
import NotificationCard from "../../components/NotificationCard";
import Layout from "../../layouts/Index";

export default function Notifications({ navigation }) {
  const theme = useTheme();

  return (
    <Layout title="Clients">
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", padding: 15 }}>
          <Input
            placeholder="Search"
            renderIcon={(props) => <Icon {...props} name="search" />}
          />
        </View>
        <Divider />
        <NotificationCard
          title="Mangre added a new task to Clients todo"
          time="1 min ago"
          isRead={false}
        />
        <Divider />
        <NotificationCard
          isAvatar={false}
          title="New message group created"
          isRead={false}
        />
        <Divider />
        <NotificationCard isRead user="Mary Sims" />
        <Divider />
        <NotificationCard mCount={7} user="Essien Bassey" />
        <Divider />
        <NotificationCard user="Shirai Subaru" />
      </ScrollView>
    </Layout>
  );
}
