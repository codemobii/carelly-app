import { Avatar as AvatarB, useTheme } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";

export default function Avatar({ image }) {
  const theme = useTheme();
  return (
    <LinearGradient
      end={{ x: 0.2, y: 0.2 }}
      style={{ borderRadius: 27, padding: 2 }}
      colors={["#45AECA", theme["color-warning-400"]]}
    >
      <AvatarB
        size="large"
        source={{
          uri: image,
        }}
      />
    </LinearGradient>
  );
}
