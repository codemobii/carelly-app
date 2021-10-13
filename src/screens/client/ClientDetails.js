import {
  Divider,
  Icon,
  List,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Layout from "../../layouts/Index";

export default function ClientDetails({ navigation }) {
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

  const renderItem = ({ item, index }) => (
    <View style={{ paddingHorizontal: 25 }} key={index}>
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
    <Layout
      title=""
      isBack
      navigation={navigation}
      accessoryRight="Care plan"
      accessoryRightIcon="folder-outline"
      accessoryRightOnpress={() => navigation.navigate("ClientCareProfile")}
    >
      <List
        ListHeaderComponent={() => (
          <View
            style={{
              padding: 25,
              marginBottom: 20,
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
            <Text style={{ marginTop: 10 }} category="s1">
              Stefania Eadmeads
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 6,
              }}
            >
              <Text style={{}} category="p2">
                Last visited
              </Text>
              <Icon
                name="clock"
                fill={theme["color-primary-default"]}
                style={{ width: 18, height: 18, marginHorizontal: 3 }}
              />
              <Text category="p2">2 days 2:12pm</Text>
            </View>
          </View>
        )}
        // ItemSeparatorComponent={Divider}
        style={{ flex: 1 }}
        data={data}
        renderItem={renderItem}
      />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCallToAction")}>
          Check in
        </Button>
      </View>
    </Layout>
  );
}
