import { Avatar, Icon, ListItem, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";

export default function NotificationCard({
  isRead = true,
  isAvatar = true,
  title = "Job Kari added Please can we see today",
  time = "2 days ago",
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
        borderRadius: 100,
      }}
    >
      <Text style={{ fontSize: 12, color: "#fff" }}>New</Text>
    </View>
  );

  const left = (props) =>
    isAvatar ? (
      <Avatar
        size="large"
        source={{
          uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
        }}
      />
    ) : (
      <View
        style={{ justifyContents: "center", alignItems: "center", width: 46 }}
      >
        <Icon name="bell" fill="#50CCCC" style={{ width: 32, height: 32 }} />
      </View>
    );

  return (
    <ListItem
      title={title}
      description={time}
      accessoryRight={!isRead && right}
      accessoryLeft={left}
      onPress={onPress}
    />
  );
}
