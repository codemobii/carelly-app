import { Button as ButtonB, Spinner, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

export default function Button({
  children,
  onPress = () => {},
  loading = false,
}) {
  const LoadingIndicator = (props) => (
    <View
      style={[props.style, { justifyContent: "center", alignItems: "center" }]}
    >
      <Spinner size="small" status="basic" />
    </View>
  );

  return (
    <LinearGradient
      end={{ x: 0.2, y: 0.2 }}
      style={{ borderRadius: 10 }}
      colors={["#45AECA", "#50CCCC"]}
    >
      <ButtonB
        onPress={onPress}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          borderWidth: 0,
        }}
        accessoryLeft={loading && LoadingIndicator}
      >
        {(evaProps) => (
          <Text
            {...evaProps}
            category="s1"
            style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
          >
            {children}
          </Text>
        )}
      </ButtonB>
    </LinearGradient>
  );
}
