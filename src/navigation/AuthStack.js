import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/auth/Onboarding";
import SignIn from "../screens/auth/SignIn";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";
import Pin from "../screens/auth/Pin";
import Verify from "../screens/auth/Verify";

const { Navigator, Screen } = createStackNavigator();

export default AuthStack = () => (
  <Navigator headerMode="none">
    <Screen name="Onboarding" component={Onboarding} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
    <Screen name="ResetPassword" component={ResetPassword} />
    <Screen name="Verify" component={Verify} />
    <Screen name="Pin" component={Pin} />
  </Navigator>
);
