import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, ScrollView } from "react-native";
import Button from "../../components/Button";
import Layout from "../../layouts/Index";

export default function ClientCareLog({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

  return (
    <Layout title="Care monitoring" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            What happened during your visit with Eadmeads
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Fill in the observations you'd like to report on.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Notes"
          description="Nothing added"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/note.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogAddNote")}
        />
        <Divider />
        <ListItem
          title="NHS coronavirus symptom checker"
          description="Nothing reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/corona.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogCovid")}
        />
        <Divider />
        <ListItem
          title="Drinks"
          description="No drinks added"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/drinks.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogDrink")}
        />
        <Divider />
        <ListItem
          title="Food"
          description="Nothing eaten"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/food.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogFood")}
        />
        <Divider />
        <ListItem
          title="Physical health"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/physical.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogAddNote")}
        />
        <Divider />
        <ListItem
          title="Toilet visits"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/toilet.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogToilet")}
        />
        <Divider />
        <ListItem
          title="Mood"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/mood.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogMood")}
        />
        <Divider />
        <ListItem
          title="Mental health"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/mental.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogAddNote")}
        />
        <Divider />
        <ListItem
          title="Weight"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/weight.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientCareLogAddNote")}
        />
        <ListItem
          title="Living skills"
          description="Not reported"
          accessoryRight={moreIcon}
          accessoryLeft={(props) => (
            <Image
              {...props}
              style={styles.avatar}
              source={require("../../../assets/images/skills.png")}
            />
          )}
          onPress={() => navigation.navigate("ClientLivingSkills")}
        />
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button>Finish reporting</Button>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
