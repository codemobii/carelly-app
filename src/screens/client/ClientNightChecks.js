import {
  Datepicker,
  Divider,
  Icon,
  IndexPath,
  Input,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ImagePicker from "../../components/ImagePicker";
import Select from "../../components/Select";
import Layout from "../../layouts/Index";

export default function ClientNightCheck({ navigation }) {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <Layout title="Night checks" isBack navigation={navigation}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {/* <View
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
          <Divider /> */}
          <View style={{ padding: 15, backgroundColor: "#fff" }}>
            <Select
              options={[
                "Sleeping",
                "Awake",
                "Restless",
                "Out of bed",
                "Up walking",
              ]}
              label="Work state"
            />

            <Select options={["None"]} label="Position before turning" />
            <Select options={["None"]} label="Turned to" />
            <Select
              options={["None", "Yes", "Corrected"]}
              label="Bed rolls up & Bumpers in Place (if applicable)"
            />
            <Select options={["None"]} label="Sensor checked (if applicable)" />
            <Select
              options={["None"]}
              label="Call bell/buzzer in reach (if applicable)"
            />

            <Input
              label="Additional details"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              //   style={{ marginTop: 15 }}
            />

            <ImagePicker />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCallToAction")}>
          Add report
        </Button>
      </View>
    </Layout>
  );
}
