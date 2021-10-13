import { Button, Icon } from "@ui-kitten/components";
import React, { useState } from "react";
import PincodeInput from "react-native-pincode-input";
import AuthLayout from "../../layouts/AuthLayout";
import { AuthContext } from "../../navigation/Index";

export default function Pin(props) {
  const [pin, setPin] = useState("");

  const pincodeInput = React.createRef();

  const { signIn } = React.useContext(AuthContext);

  const handleOnTextChange = (code) => {
    setPin(code);
    if (pin.length >= 3) {
      signIn({ e: "" });
    }
  };

  return (
    <AuthLayout
      navigation={props.navigation}
      title="Create a PIN"
      detail="Create your Carelly App PIN for in app authorizations."
      buttonTitle="Continue"
      submit={signIn({ e: "" })}
    >
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
    </AuthLayout>
  );
}
