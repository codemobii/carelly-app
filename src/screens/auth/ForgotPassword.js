import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import usePost from "../../utils/PostRequest";

export default function ForgotPassword({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const { Post } = usePost();

  const handleSubmit = async () => {
    setLoading(true);
    Post(
      "/employee/forgot-password",
      { email },
      () => {
        setLoading(false);
        navigation.navigate("ResetPassword", {
          email,
        });
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <AuthLayout
      navigation={navigation}
      title="Forgot password"
      detail="Enter your email address to recieve a reset code"
      buttonTitle="Send Code"
      submit={handleSubmit}
      loading={loading}
    >
      <Input
        label="Email address"
        placeholder="your@email.com"
        renderIcon={(props) => <Icon {...props} name="email" />}
        value={email}
        onChange={(e) => setEmail(e)}
      />
    </AuthLayout>
  );
}
