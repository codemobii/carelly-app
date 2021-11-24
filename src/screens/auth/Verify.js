import { Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import usePost from "../../utils/PostRequest";
import { AuthContext } from "../../navigation/Index";

export default function Verify({ navigation }) {
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);

  const { Post, response } = usePost();
  const { signIn } = React.useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    Post(
      "/employee/verify-code",
      { code },
      () => {
        setLoading(false);
        setCode("");
        signIn({ e: response });
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <AuthLayout
      navigation={navigation}
      title="Verify it's you"
      detail="Enter your the verification code sent to your email"
      buttonTitle="Verify Code"
      submit={handleSubmit}
      loading={loading}
    >
      <Input
        label="Enter OTP"
        placeholder="cOdE1"
        renderIcon={(props) => <Icon {...props} name="lock" />}
        value={code}
        onChange={(e) => setCode(e)}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#ccc",
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0,
    borderWidth: 1,
    borderRadius: 6,
  },

  underlineStyleHighLighted: {
    borderColor: "#ccc",
  },
});
