import React from "react";
import { Icon, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

export default function DashboardCard({
  w = "48%",
  colors = ["#328AAD", "#45AECA"],
  buttonText = "Review",
  title = "Review your client checkins",
  icon = "pie-chart-2",
  onPress = null,
}) {
  return (
    <View
      // end={{ x: 0.2, y: 0.2 }}
      style={{
        borderRadius: 10,
        width: w,
        padding: 15,
        backgroundColor: colors[1],
      }}
      // colors={colors}
    >
      <Icon name={icon} fill="#fff" style={{ width: 44, height: 44 }} />

      <Text style={{ color: "#fff", marginTop: 10 }}>{title}</Text>

      <TouchableOpacity
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 100,
          backgroundColor: colors[0],
          marginTop: 10,
        }}
        onPress={onPress}
      >
        <Text
          category="label"
          style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
