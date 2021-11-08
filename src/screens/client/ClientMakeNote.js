import { Icon, Input as InputB } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ImagePicker from "../../components/ImagePicker";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientMakeNote({ navigation }) {
  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 15, backgroundColor: "#fff" }}>
          <Input label="Note title" placeholder="" />

          <InputB
            label="Note description"
            placeholder=""
            multiline={true}
            textStyle={{ minHeight: 64 }}
            style={{ marginVertical: 15 }}
          />

          <Input
            label="Set reminder (if applicable)"
            placeholder=""
            renderIcon={(props) => <Icon {...props} name="calendar-outline" />}
          />

          <ImagePicker />
        </View>
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientNoteList")}>
          Submit
        </Button>
      </View>
    </Layout>
  );
}
