import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../../components/Input";
import AuthLayout from "../../layouts/AuthLayout";

export default function Verify({ navigation }) {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <AuthLayout
      navigation={navigation}
      title="Verify it's you"
      detail="Enter your the verification code sent to your email"
      buttonTitle="Verify Code"
      submit={() => navigation.navigate("Pin")}
    >
      <OTPInputView
        style={{ width: "100%", height: 50, paddingHorizontal: 30 }}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
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
