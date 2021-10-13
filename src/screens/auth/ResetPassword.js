import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";

export default function ResetPassword({ navigation }) {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <AuthLayout
      navigation={navigation}
      title="Reset password"
      detail="Minimum of 8 characters with at least 1 uppercase, lowercase, and 1 digit."
      buttonTitle="Reset Password"
      submit={() => navigation.navigate("SignIn")}
    >
      <Input
        label="Reset OTP"
        placeholder="1234"
        renderIcon={(props) => <Icon {...props} name="lock" />}
      />
      <Input
        label="New Password"
        placeholder="Mypassword1!@"
        isPassword={true}
        renderIcon={(props) => (
          <TouchableWithoutFeedback
            onPress={() => {
              setIsPassword(!isPassword);
            }}
          >
            <Icon {...props} name={isPassword ? "eye-off" : "eye"} />
          </TouchableWithoutFeedback>
        )}
        marginTop={20}
      />
      <Input
        label="Confirm Password"
        placeholder="Mypassword1!@"
        isPassword={true}
        renderIcon={(props) => (
          <TouchableWithoutFeedback
            onPress={() => {
              setIsPassword(!isPassword);
            }}
          >
            <Icon {...props} name={isPassword ? "eye-off" : "eye"} />
          </TouchableWithoutFeedback>
        )}
        marginTop={20}
      />

      <View
        style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Button
          style={{ position: "absolute", right: 0 }}
          size="small"
          appearance="ghost"
        >
          Resend code
        </Button>
      </View>
    </AuthLayout>
  );
}
