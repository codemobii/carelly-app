import {
  Datepicker,
  Divider,
  Icon,
  IndexPath,
  Input,
  ListItem,
  Select,
  SelectItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ImagePicker from "../../components/ImagePicker";
import Layout from "../../layouts/Index";

export default function ClientRaiseConcernAddNote({ navigation }) {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <Layout title="Raise concern" isBack navigation={navigation}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View
            style={{
              backgroundColor: "#fff",
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{}} category="s1">
              What happened?
            </Text>
            <Text style={{ marginTop: 5 }} category="p2">
              Please describe in as much detail as possible what you observed.
            </Text>
          </View>
          <Divider />
          <View style={{ padding: 15, backgroundColor: "#fff" }}>
            <Input
              label="Add note"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
            />

            <ImagePicker />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCallToAction")}>
          Add concern to report
        </Button>
      </View>
    </Layout>
  );
}
