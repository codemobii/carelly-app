import { Card, Text, useTheme } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import Avatar from "./Avatar";

export default function ClientCard({ item = {}, navigation }) {
  const theme = useTheme();
  return (
    <Card
      onPress={() => navigation.navigate("ClientDetails")}
      style={{
        width: "48%",
        borderRadius: 6,
        height: 130,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar image={item?.image} />
      </View>
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: 11,
          width: "100%",
        }}
        category="p2"
      >
        {item?.first_name + " " + item?.last_name}, 77 yrs
      </Text>
    </Card>
  );
}
