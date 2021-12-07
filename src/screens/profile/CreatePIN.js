import { Icon, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import PincodeInput from "react-native-pincode-input";
import AuthLayout from "../../layouts/AuthLayout";
import { AuthContext } from "../../navigation/Index";
import * as SecureStore from "expo-secure-store";
import Layout from "../../layouts/Index";
import { View } from "react-native";
import Button from "../../components/Button";

export default function CreatePIN({ navigation }) {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnTextChange = async (code) => {
    setPin(code);
    if (pin.length >= 3) {
      try {
        await SecureStore.setItemAsync("userPIN", pin);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
  };

  return (
    <Layout title="Profile" navigation={navigation}>
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{}} category="s1">
          Create your in-app Authentication PIN
        </Text>
        <Text style={{ marginTop: 5 }} category="p2">
          This PIN will be requested anytime you want to access the app after
          closing the app.
        </Text>
      </View>
      <PincodeInput
        ref={(pincodeInput) => (pincodeInput = pincodeInput)}
        length={4}
        containerStyle={{
          display: "flex",
          width: "100%",
          height: 200,
          justifyContent: "center",
        }}
        circleContainerStyle={{
          paddingHorizontal: 32,
        }}
        circleEmptyStyle={{
          borderWidth: 1,
          borderColor: "#424242",
        }}
        circleFilledStyle={{
          backgroundColor: "#424242",
        }}
        pin={pin}
        onTextChange={handleOnTextChange}
      />
    </Layout>
  );
}
