import { Button, CheckBox, ListItem, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";

export default function TaskCard({ isTag = false, isDue = false }) {
  const [checked, setChecked] = useState(false);

  const checkBox = (props) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      {...props}
    >
      {isTag && (
        <Button
          {...props}
          style={{
            position: "absolute",
            right: 30,
            width: 80,
            borderRadius: 100,
            marginTop: -3,
          }}
          status={isDue ? "success" : "danger"}
          size="tiny"
        >
          {isDue ? "Due" : "Overdue"}
        </Button>
      )}
      <CheckBox
        {...props}
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
        style={{ borderRadius: 100 }}
      />
    </View>
  );

  return (
    <ListItem
      title="Clean everywhere"
      description={(props) => (
        <Text {...props} style={{ marginTop: 10, marginLeft: 8 }}>
          Sets animation duration in milliseconds when indeterminate is set
        </Text>
      )}
      accessoryRight={checkBox}
      style={{ alignItems: "flex-start" }}
    />
  );
}
