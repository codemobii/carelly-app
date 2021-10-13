import { CheckBox, ListItem } from "@ui-kitten/components";
import React, { useState } from "react";

export default function MedicationDoseCard() {
  const [checked, setChecked] = useState(false);

  const checkBox = (props) => (
    <CheckBox
      {...props}
      checked={checked}
      onChange={(nextChecked) => setChecked(nextChecked)}
    />
  );

  return <ListItem title="Atovastatin 20mg tablets" accessoryLeft={checkBox} />;
}
