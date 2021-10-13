import { ListItem, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function ClientInfoCard({
  title = "Prefered name",
  description = "Client",
}) {
  return (
    <ListItem
      title={(props) => (
        <Text
          {...props}
          category="label"
          style={{ color: "#ccc", paddingLeft: 8 }}
        >
          {title}
        </Text>
      )}
      description={(props) => (
        <Text
          {...props}
          category="s1"
          style={{ paddingLeft: 8, fontWeight: "normal", marginTop: 3 }}
        >
          {description}
        </Text>
      )}
    />
  );
}
