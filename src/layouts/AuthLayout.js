import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";

export default function AuthLayout({
  children,
  title = "Sign in",
  buttonTitle = "Continue",
  detail = "Hey you're back, fill in your details to get back in",
  navigation = () => {},
  submit = () => {},
  loading = false,
}) {
  const BackIcon = (props) => (
    <TouchableOpacity
      style={{
        width: 26,
        height: 26,
        backgroundColor: "#eee",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon {...props} name="arrow-ios-back" />
    </TouchableOpacity>
  );

  const BackAction = () => <TopNavigationAction icon={BackIcon} />;

  const { StatusBarManager } = NativeModules;

  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 34 : StatusBarManager.HEIGHT;

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <>
      <View
        style={{
          height: STATUSBAR_HEIGHT,
          backgroundColor: "#fff",
          width: "100%",
          zIndex: 100,
        }}
      />
      <TopNavigation
        accessoryLeft={BackAction}
        alignment="center"
        title={(evaProps) => <Text {...evaProps}>{title}</Text>}
        style={{ zIndex: 100 }}
      />
      <Layout level="1" style={{ flex: 1, paddingHorizontal: 20 }}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{ marginTop: 50 }}
        >
          <ScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: "cover" }}
                source={require("../../assets/icon.png")}
              />
            </View>
            <Text
              category="p1"
              style={{
                paddingHorizontal: 30,
                textAlign: "center",
                fontSize: 18,
                marginBottom: 30,
              }}
            >
              {detail}
            </Text>
            {children}

            <View style={{ paddingVertical: 30 }}>
              <Button onPress={submit} loading={loading}>
                {buttonTitle}
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Layout>
    </>
  );
}
