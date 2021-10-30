import { Avatar, Icon, ListItem, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";

export default function MessageCard({
  isRead = false,
  mCount = 3,
  user = "Job Kari",
  description = "Please can we see today",
  onPress = null,
}) {
  const [checked, setChecked] = useState(false);

  const right = (props) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
        backgroundColor: "red",
        borderRadius: 6,
      }}
    >
      <Text style={{ fontSize: 14, color: "#fff" }}>{mCount}</Text>
    </View>
  );

  const left = (props) => (
    <Avatar
      size="large"
      source={{
        uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
      }}
    />
  );

  return (
    <ListItem
      title={user}
      description={description}
      accessoryRight={!isRead && right}
      accessoryLeft={left}
      onPress={onPress}
    />
  );
}
