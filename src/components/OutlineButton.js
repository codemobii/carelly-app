import { Button, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";

export default function OutlineButton({
  children,
  icon = null,
  onPress = null,
}) {
  const theme = useTheme();
  return (
    <Button
      appearance="outline"
      size="giant"
      onPress={onPress}
      style={{ marginBottom: 15 }}
    >
      {(evaProps) => (
        <View
          {...evaProps}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {icon && <Image style={{ width: 32, height: 32 }} source={icon} />}
          <Text
            category="c1"
            style={{ color: theme["color-success-900"], textAlign: "center" }}
          >
            {children}
          </Text>
        </View>
      )}
    </Button>
  );
}
