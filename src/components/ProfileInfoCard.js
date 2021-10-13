import { Icon, ListItem, Text } from "@ui-kitten/components";
import React from "react";

export default function ProfileInfoCard({
  label = "Name",
  info = "John Chimaobi",
  onPress,
  icon = "arrow-ios-forward",
}) {
  const moreIcon = (props) => <Icon {...props} name={icon} />;

  return (
    <ListItem
      title={(props) => (
        <Text category="p2" style={{ marginLeft: 8 }}>
          {label}
        </Text>
      )}
      description={(props) => (
        <Text category="s2" style={{ marginLeft: 8, marginTop: 3 }}>
          {info}
        </Text>
      )}
      accessoryRight={moreIcon}
      onPress={onPress}
    />
  );
}
