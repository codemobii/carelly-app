import { Select as SelectB, SelectItem } from "@ui-kitten/components";
import React from "react";
import { View, Text } from "react-native";

export default function Select({
  options = [],
  label = "Select",
  value = 1,
  onSelect = null,
  margiBottom = 20,
}) {
  const [selectedIndex, setSelectedIndex] = React.useState();
  return (
    <SelectB
      label={label}
      style={{ marginBottom: margiBottom }}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {options.map((e, i) => (
        <SelectItem key={i} title={e} />
      ))}
    </SelectB>
  );
}
