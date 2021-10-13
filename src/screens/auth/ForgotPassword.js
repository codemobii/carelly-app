import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";

export default function ForgotPassword({ navigation }) {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <AuthLayout
      navigation={navigation}
      title="Forgot password"
      detail="Enter your email address to recieve a reset code"
      buttonTitle="Send Code"
      submit={() => navigation.navigate("ResetPassword")}
    >
      <Input
        label="Email address"
        placeholder="your@email.com"
        renderIcon={(props) => <Icon {...props} name="email" />}
      />
    </AuthLayout>
  );
}
