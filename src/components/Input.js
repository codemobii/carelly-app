import { Input as InputB } from "@ui-kitten/components";
import React from "react";

export default function Input({
  value = "",
  label = "",
  placeholder = "",
  isPassword = false,
  onChange = () => {},
  renderIcon,
  marginTop = 0,
}) {
  return (
    <InputB
      style={{ borderRadius: 15, marginTop: marginTop }}
      value={value}
      label={label}
      placeholder={placeholder}
      accessoryRight={renderIcon}
      secureTextEntry={isPassword}
      onChangeText={onChange}
      size="large"
    />
  );
}
