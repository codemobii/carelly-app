import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import Layout from "../../layouts/Index";

export default function ClientVisitLog({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="Visit log" isBack navigation={navigation}>
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
            Visited by John Chimaobi
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Visit Time
        </Text>

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{}} category="p1">
              Check in:
            </Text>
            <Text style={{}} category="p1">
              09:34
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 4,
            }}
          >
            <Text style={{}} category="p1">
              Check out:
            </Text>
            <Text style={{}} category="p1">
              09:40
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{}} category="p1">
              Total visit time
            </Text>
            <Text style={{}} category="p1">
              4mins
            </Text>
          </View>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          General notes
        </Text>

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Text style={{}} category="p1">
            We are the first gut microbiome & genetic risk based precision care
            program proven to reduce weight & inflammatory illness.
          </Text>
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Observations
        </Text>

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Concerns"
            description={(props) => (
              <View {...props}>
                <View>
                  <Text>Concern type</Text>
                  <Text category="p2">Accident</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text>Privacy status</Text>
                  <Text category="p2">Private</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text>Carer notes</Text>
                  <Text category="p2">Client fell over</Text>
                </View>
              </View>
            )}
            accessoryLeft={(props) => (
              <Image
                {...props}
                style={styles.avatar}
                source={require("../../../assets/images/warn.png")}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Drinks"
            description="1 caffeinated drink - 0.23 litre"
            accessoryLeft={(props) => (
              <Image
                {...props}
                style={styles.avatar}
                source={require("../../../assets/images/drinks.png")}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Toilet visits"
            description="330ml observed in catheter bag"
            accessoryLeft={(props) => (
              <Image
                {...props}
                style={styles.avatar}
                source={require("../../../assets/images/toilet.png")}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Mood"
            description={(props) => (
              <View {...props}>
                <View>
                  <Text>Sad</Text>
                  <Text category="p2">Client is sad because Man U lost</Text>
                </View>
              </View>
            )}
            accessoryLeft={(props) => (
              <Image
                {...props}
                style={styles.avatar}
                source={require("../../../assets/images/mood.png")}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Fully taken"
            description={(props) => (
              <View {...props}>
                <View>
                  <Text>Hypromellose 0.3% eye drops</Text>
                  <Text category="p2">3</Text>
                </View>
              </View>
            )}
            accessoryRight={(props) => (
              <Text {...props} category="p2" style={{ paddingRight: 15 }}>
                10:00am
              </Text>
            )}
            accessoryLeft={(props) => (
              <View
                {...props}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  backgroundColor: "lightgreen",
                }}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Divider />
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Fully taken"
            description={(props) => (
              <View {...props}>
                <View>
                  <Text>Wafarin 1mg tablet</Text>
                  <Text category="p2">one tablet</Text>
                </View>
              </View>
            )}
            accessoryRight={(props) => (
              <Text {...props} category="p2" style={{ paddingRight: 15 }}>
                10:00am
              </Text>
            )}
            accessoryLeft={(props) => (
              <View
                {...props}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  backgroundColor: "lightgreen",
                }}
              />
            )}
            style={{ alignItems: "flex-start" }}
          />
        </View>

        <Text style={{ padding: 15 }} category="s1">
          Completed tasks
        </Text>

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Assist to have a strip wash"
            description="Make sure to get it done before lunch"
          />
        </View>

        <Divider />

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Assist to have a strip wash"
            description="Make sure to get it done before lunch"
          />
        </View>

        <Divider />

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Assist to have a strip wash"
            description="Make sure to get it done before lunch"
          />
        </View>

        <Divider />

        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <ListItem
            title="Assist to have a strip wash"
            description="Make sure to get it done before lunch"
          />
        </View>
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
