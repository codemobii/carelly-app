import { Divider, Icon, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientCareLogDrinkHowMuch({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="checkmark" />;

  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            How much did they drink?
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            Choose the size of drink and add how many they had.
          </Text>
        </View>
        <Divider />
        <ListItem
          title="Sip"
          description="Approx. 20ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />

        <Divider />
        <ListItem
          title="Cup"
          description="Approx. 230ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />

        <Divider />
        <ListItem
          title="Class"
          description="Approx. 250ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />

        <Divider />
        <ListItem
          title="Can"
          description="Approx. 330ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />

        <Divider />
        <ListItem
          title="Mug"
          description="Approx. 360ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />

        <Divider />
        <ListItem
          title="Pint"
          description="Approx. 568ml"
          accessoryRight={(props) => (
            <View
              {...props}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="plus-circle-outline" {...props} />
              <Text category="h4">0</Text>
              <Icon name="minus-circle-outline" {...props} />
            </View>
          )}
        />
      </ScrollView>

      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button
          onPress={() => navigation.navigate("ClientCareLogDrinkAddedList")}
        >
          Add drinks
        </Button>
      </View>
    </Layout>
  );
}
