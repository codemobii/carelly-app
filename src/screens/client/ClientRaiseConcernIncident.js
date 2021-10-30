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

export default function ClientRaiseConcernIncident({ navigation }) {
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
            <Datepicker
              label="Incident date"
              placeholder="Pick Date"
              accessoryRight={(props) => <Icon {...props} name="calendar" />}
            />

            <Input
              label="Incident time"
              placeholder=""
              style={{ marginTop: 15 }}
            />

            <Select
              label="Category"
              style={{ marginTop: 15 }}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <SelectItem title="Assault" />
              <SelectItem title="Sexual" />
              <SelectItem title="Police involvement" />
              <SelectItem title="Safeguarding" />
              <SelectItem title="Physical injury" />
              <SelectItem title="Missing person" />
              <SelectItem title="Injury to staff" />
              <SelectItem title="Fire" />
              <SelectItem title="Injury to service user" />
              <SelectItem title="Self-harm" />
              <SelectItem title="Property damage" />
              <SelectItem title="Other allegations" />
            </Select>

            <Input
              label="Incident Location"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Who were involved in this incident?"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Incident Summary: what happened and possible reasons?"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Was anyone taken to the hospital? If Yes, provide hospital info and if medication was given provide details"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Was Social Worker informed? If Yes, - specify (SW name, date and time informed and contact info)?"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Was CQC notified or Police involved? If Yes, provide details"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Have any Next of Kin informed? If Yes, provide details"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Details of Manager or senior staff member on duty at the time of incident"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Do you consider the danger removed and the home is safe once again? If No, provide details"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
            />

            <Input
              label="Remedial action taken by manager or senior staff"
              placeholder="Add your notes here . . ."
              multiline={true}
              textStyle={{ minHeight: 64 }}
              style={{ marginTop: 15 }}
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
