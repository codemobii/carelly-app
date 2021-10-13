import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";
import { AuthContext } from "../../navigation/Index";

export default function SignIn({ navigation }) {
  const [isPassword, setIsPassword] = useState(false);
  const { signIn } = React.useContext(AuthContext);
  return (
    <AuthLayout
      navigation={navigation}
      title="Sign in"
      detail="Welcome! fill in your details & continue"
      buttonTitle="Continue"
      submit={() => navigation.navigate("Verify")}
    >
      <Input
        label="Email address"
        placeholder="your@email.com"
        renderIcon={(props) => <Icon {...props} name="email" />}
      />
      <Input
        label="Password"
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
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password
        </Button>
      </View>
    </AuthLayout>
  );
}
