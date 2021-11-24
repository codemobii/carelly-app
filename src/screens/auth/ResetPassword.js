import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import usePost from "../../utils/PostRequest";

export default function ResetPassword({ navigation, route }) {
  const [isPassword, setIsPassword] = useState(true);
  const [isPassword2, setIsPassword2] = useState(true);

  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const { email } = route.params;

  const { Post, response } = usePost();

  const handleResendCode = async () => {
    setResending(true);
    Post(
      "/employee/forgot-password",
      { code, password, confirm_password },
      () => {
        setResending(false);
      },
      () => {
        setResending(false);
      }
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    Post(
      "/employee/reset-password",
      { email },
      () => {
        setLoading(false);
        navigation.navigate("SignIn");
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <AuthLayout
      navigation={navigation}
      title="Reset password"
      detail="Minimum of 8 characters with at least 1 uppercase, lowercase, and 1 digit."
      buttonTitle="Reset Password"
      submit={handleSubmit}
      loading={loading}
    >
      <Input
        label="Reset OTP"
        placeholder="1234"
        renderIcon={(props) => <Icon {...props} name="lock" />}
        value={code}
        onChange={(e) => setCode(e)}
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
        value={password}
        onChange={(e) => setPassword(e)}
      />
      <Input
        label="Confirm Password"
        placeholder="Mypassword1!@"
        isPassword={true}
        renderIcon={(props) => (
          <TouchableWithoutFeedback
            onPress={() => {
              setIsPassword2(!isPassword2);
            }}
          >
            <Icon {...props} name={isPassword2 ? "eye-off" : "eye"} />
          </TouchableWithoutFeedback>
        )}
        marginTop={20}
        value={confirm_password}
        onChange={(e) => setConfirm_password(e)}
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
          onPress={handleResendCode}
        >
          {resending ? "Please wait . . ." : "Resend code"}
        </Button>
      </View>
    </AuthLayout>
  );
}
