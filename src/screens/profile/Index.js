import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import Layout from "../../layouts/Index";
import { AuthContext } from "../../navigation/Index";
import { GetPIN, GetUser } from "../../utils/useAuth";
import * as SecureStore from "expo-secure-store";
import { fetcher } from "../../utils/PostRequest";

export default function ProfileMain({ navigation }) {
  const theme = useTheme();
  const { signOut } = React.useContext(AuthContext);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  let isPin;
  console.log("Check PIN", isPin);

  useEffect(() => {
    const getData = async () => {
      const isPIN = await GetPIN();
      const token = await GetUser();
      setData(token.employee);
      isPin = isPIN;

      console.log(token.employee);

      if (token) {
        const user = await fetcher(`/employee/details/${token?.employee?.hid}`);
        console.log(user);
      } else {
        console.log("None");
      }
    };

    getData();
  }, []);

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
            {data?.first_name + " " + data?.last_name}
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Personal details
        </Text>

        <ProfileInfoCard
          label="Full name"
          info={data?.first_name + " " + data?.last_name}
          icon="person-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Job role"
          info={data?.job_title}
          icon="briefcase-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Phone number"
          info={data?.phone_number}
          icon="phone-outline"
        />
        <Divider />
        <ProfileInfoCard
          label="Email address"
          info={data?.email}
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
          Security
        </Text>
        <ProfileInfoCard
          label=""
          info="Authentication PIN"
          onPress={() => !isPin && navigation.navigate("CreatePIN")}
        />
        <Divider />
        <ProfileInfoCard label="" info="Sign out" onPress={signOut} />

        <Text style={{ padding: 15 }} category="s1">
          Versions
        </Text>
        <ProfileInfoCard label="Application" info="1.0.0 - bpsls" />
      </ScrollView>
    </Layout>
  );
}
