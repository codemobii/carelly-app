import { ListItem, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function MedicationCard({ navigation }) {
  const theme = useTheme();
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <ListItem
        title="Blister pack #1"
        description={(props) => (
          <View
            {...props}
            style={{
              marginTop: 10,
              marginLeft: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 100,
                backgroundColor: theme["color-success-400"],
                marginRight: 4,
              }}
            />
            <Text category="p2">Fully taken</Text>
          </View>
        )}
        accessoryRight={(props) => (
          <Text category="p2" style={{ marginRight: 15 }}>
            {new Date().toLocaleDateString()}
          </Text>
        )}
        style={{
          borderWidth: 1,
          borderColor: "#eee",
          borderRadius: 6,
          marginBottom: 15,
        }}
        onPress={() => navigation.navigate("ClientMedicationInstruction")}
      />
    </View>
  );
}
