import { Icon, List, ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import Layout from "../../layouts/Index";

export default function Visits({ navigation }) {
  const theme = useTheme();

  const data = require("../../data/visits.json");

  const renderItemAccessory = (props) => (
    <Icon {...props} name="arrow-ios-forward" />
  );

  const renderItemIcon = ({ image }) => (
    <>
      <Avatar image={image} />
    </>
  );

  const renderItem = ({ item, index }) => (
    <View key={index}>
      <ListItem
        onPress={() => navigation.navigate("ClientVisitLog")}
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
    </View>
  );

  return (
    <Layout title="Visits" isBack navigation={navigation}>
      <List
        contentContainerStyle={{ padding: 25 }}
        // ItemSeparatorComponent={Divider}
        style={{ flex: 1 }}
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
}
