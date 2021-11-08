import { Avatar, Icon, ListItem, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NoteCard({
  title = "Timmy aded new note Life is Hospital administration",
  description = "Note: The addmission of a physician to a hospital's staff, base on his/her credentials, work. He, malpractice claims Hx and reputation Medical practice. A note timeslot in which a person is examined y a physician during his/her normal office hrs.",
  navigation = null,
}) {
  const [checked, setChecked] = useState(false);

  const right = (props) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ClientMakeNoteEdit")}
      >
        <Icon
          name="edit-outline"
          fill="black"
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon
          name="trash-2-outline"
          fill="red"
          style={{ width: 24, height: 24, marginLeft: 5 }}
        />
      </TouchableOpacity>
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
      title={(props) => (
        <Text
          {...props}
          style={{ paddingLeft: 8, fontSize: 12, fontWeight: "bold" }}
        >
          {title}
        </Text>
      )}
      description={(props) => (
        <Text
          {...props}
          style={{
            paddingLeft: 8,
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          {description}
        </Text>
      )}
      accessoryRight={right}
      accessoryLeft={left}
      style={{ alignItems: "flex-start" }}
    />
  );
}
