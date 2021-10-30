import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function SectionTitle({ title = "", icon = null }) {
  return (
    <View
      style={{
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text category="s1"> {title}</Text>
      {icon && (
        <Icon name={icon} style={{ width: 24, height: 24 }} fill="#111" />
      )}
    </View>
  );
}
