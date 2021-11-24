import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import usePost from "../../utils/PostRequest";

export default function SignIn({ navigation }) {
  const [isPassword, setIsPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { Post } = usePost();

  const handleSubmit = async () => {
    setLoading(true);
    Post(
      "/employee/login",
      { email, password },
      () => {
        setLoading(false);
        navigation.navigate("Verify");
      },
      () => {
        setLoading(false);
      }
    );
  };

  return (
    <AuthLayout
      navigation={navigation}
      title="Sign in"
      detail="Welcome! fill in your details & continue"
      buttonTitle="Continue"
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
      <Input
        label="Password"
        placeholder="Mypassword1!@"
        isPassword={isPassword}
        value={password}
        onChange={(e) => setPassword(e)}
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
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password
        </Button>
      </View>
    </AuthLayout>
  );
}
