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
            <View
              style={{
                width: "48%",
                backgroundColor: theme["color-info-400"],
                borderRadius: 6,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 130,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Visits")}
              >
                <Icon
                  name="pie-chart-2"
                  fill="#fff"
                  style={{ width: 44, height: 44 }}
                />
                <Text style={{ color: "#fff", marginTop: 10 }}>
                  Review visits
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "48%",
                backgroundColor: theme["color-primary-400"],
                borderRadius: 6,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 130,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Clients")}
              >
                <Icon
                  name="pin"
                  fill="#fff"
                  style={{ width: 44, height: 44 }}
                />
                <Text style={{ color: "#fff", marginTop: 10 }}>
                  Begin the day
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <View style={{ padding: 25 }}>
          <Text category="s1">Most recent visits</Text>
          <Text category="c1" style={{ marginTop: 5 }}>
            Visits you have made this week
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <ListItem
              title={(evaProps) => (
                <Text {...evaProps} style={{ marginBottom: 5, marginLeft: 8 }}>
                  {item?.first_name + " " + item?.last_name}
                </Text>
              )}
              description={(evaProps) => (
                <>
                  <Text {...evaProps}>{new Date().toLocaleDateString()}</Text>
                  <Text {...evaProps}>Visited by John Chimaobi</Text>
                </>
              )}
              accessoryLeft={() => renderItemIcon({ image: item?.image })}
              accessoryRight={renderItemAccessory}
              style={{
                marginLeft: 25,
                borderWidth: 1,
                borderColor: "#eee",
                borderRadius: 6,
              }}
            />
          ))}
        </ScrollView> */}

        <View style={{ padding: 25 }}>
          <Text category="s1">Need help?</Text>
          <Text category="c1" style={{ marginTop: 5 }}>
            Check FAQs or contact support
          </Text>

          <Card
            style={{
              marginTop: 25,
              width: "100%",
              backgroundColor: theme["color-primary-100"],
              position: "relative",
            }}
          >
            <View style={{ width: "65%" }}>
              <Text category="s1">
                Having issues using the app? check FAQs or contact support
              </Text>

              <Button style={{ marginTop: 25 }}>Get help</Button>
            </View>

            <View style={{ position: "absolute", right: 20, top: 20 }}>
              <Icon
                name="shake"
                fill={theme["color-info-300"]}
                style={{ width: 72, height: 72 }}
              />
            </View>
          </Card>
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
                  <Text {...evaProps}>{new Date().toLocaleDateString()}</Text>
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
