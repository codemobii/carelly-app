import { CheckBox, ListItem } from "@ui-kitten/components";
import React, { useState } from "react";

export default function TaskCard() {
  const [checked, setChecked] = useState(false);

  const checkBox = (props) => (
    <CheckBox
      {...props}
      checked={checked}
      onChange={(nextChecked) => setChecked(nextChecked)}
    />
  );

  return (
    <ListItem
      title="Clean everywhere"
      description="Sets animation duration in milliseconds when indeterminate is set, animation duration in milliseconds when indeterminate is set."
      accessoryLeft={checkBox}
      style={{ alignItems: "flex-start" }}
    />
  );
}
