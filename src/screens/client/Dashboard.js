import {
  Button,
  Card,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "../../components/Avatar";
import DashboardCard from "../../components/DashboardCard";
import Layout from "../../layouts/Index";

export default function Dashboard({ navigation }) {
  const theme = useTheme();
  const data = new Array(8).fill({
    id: 3,
    first_name: "Stefania",
    last_name: "Eadmeads",
    image:
      "https://cdn.pixabay.com/photo/2015/05/31/11/56/old-791360_960_720.jpg",
  });

  const renderItemAccessory = (props) => (
    <Icon {...props} name="arrow-ios-forward" />
  );

  const renderItemIcon = ({ image }) => (
    <>
      <Avatar image={image} />
    </>
  );

  return (
    <Layout title="Dashboard">
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 25 }}>
          <Text category="s1">What do you want to do?</Text>
          <Text category="c1" style={{ marginTop: 5 }}>
            Kindly select from the quick options below
          </Text>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <DashboardCard onPress={() => navigation.navigate("Visits")} />

            <DashboardCard
              title="Get started with your visits"
              icon="pin"
              buttonText="Get started"
              colors={["#DBA005", "#ffc107"]}
              onPress={() => navigation.navigate("Clients")}
            />
          </View>
        </View>

        <View style={{ padding: 25 }}>
          <Text category="s1">Most recent visits</Text>
          <Text category="c1" style={{ marginTop: 5 }}>
            Visits you have made this week
          </Text>
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          {data?.map((item, index) => (
            <ListItem
              key={index}
              title={(evaProps) => (
                <Text {...evaProps} style={{ marginBottom: 5, marginLeft: 8 }}>
                  {item?.first_name + " " + item?.last_name}
                </Text>
              )}
              description={(evaProps) => (
                <>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text {...evaProps}>{new Date().toLocaleDateString()}</Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#eee",
                        borderRadius: 7,
                        padding: 4,
                        paddingHorizontal: 8,
                      }}
                    >
                      <Text
                        category="label"
                        style={{ color: theme["color-warning-700"] }}
                      >
                        Handover
                      </Text>
                    </View>
                  </View>
                  <Text {...evaProps}>Visited by John Chimaobi</Text>
                </>
              )}
              accessoryLeft={() => renderItemIcon({ image: item?.image })}
              accessoryRight={renderItemAccessory}
              style={{
                marginBottom: 15,
                borderWidth: 1,
                borderColor: "#eee",
                borderRadius: 6,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
