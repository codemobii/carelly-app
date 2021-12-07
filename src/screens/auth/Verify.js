import { Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import usePost from "../../utils/PostRequest";
import { AuthContext } from "../../navigation/Index";
import Toast from "react-native-toast-message";
import axios from "axios";
import { get } from "lodash";

export default function Verify({ navigation }) {
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);

  const { Post, response } = usePost();
  const { signIn } = React.useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    await axios({
      method: "POST",
      url: "https://carelly-backend.herokuapp.com/employee/verify-code",
      data: { code },
    })
      .then((res) => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: res?.data?.message || "Successful!",
        });
        signIn(res.data.data);
      })
      .catch((er) => {
        const msg =
          get(er, "response.data.message" || "response.message") || er.message;
        Toast.show({
          type: "error",
          text1: "Error!",
          text2: msg,
        });
        console.log(er);
      })
      .finally(() => setLoading(false));
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
