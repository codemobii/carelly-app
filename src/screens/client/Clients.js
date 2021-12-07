import {
  Avatar,
  Button,
  Card,
  Icon,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";
import { fetcher } from "../../utils/PostRequest";
import { GetUser } from "../../utils/useAuth";

export default function Clients({ navigation }) {
  const theme = useTheme();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = await GetUser();
      const data = await fetcher(`/careteam/${token?.employee?.hid}/clients`);
      console.log(data);
    };

    getData();
  }, []);

  return (
    <Layout title="Clients">
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", padding: 25 }}>
          <Input
            placeholder="Search clients"
            renderIcon={(props) => <Icon {...props} name="search" />}
          />
        </View>

        <View
          style={{
            padding: 25,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data?.map((item, index) => (
            <ClientCard key={index} item={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
