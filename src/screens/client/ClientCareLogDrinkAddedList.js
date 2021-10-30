import {
  Button as ButtonB,
  Divider,
  Icon,
  ListItem,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import ClientCard from "../../components/ClientCard";
import Input from "../../components/Input";
import Layout from "../../layouts/Index";

export default function ClientCareLogDrinkAddedList({ navigation }) {
  const theme = useTheme();

  const moreIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;
  const doneIcon = (props) => <Icon {...props} name="close-circle-outline" />;

  return (
    <Layout title="" isBack navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{}} category="s1">
            Submit drink to report
          </Text>
          <Text style={{ marginTop: 5 }} category="p2">
            If you've finished adding drinks, submit them to your report. If not
            feel free to add more.
          </Text>
        </View>
        <Text style={{ padding: 15 }} category="s1">
          Drank (observed)
        </Text>
        <ListItem
          title="Regular drinks"
          description="1 cup"
          accessoryRight={doneIcon}
        />
        <Divider />
        <ListItem
          title="Regular drinks"
          description="1 cup"
          accessoryRight={doneIcon}
        />

        <View style={{ padding: 15 }}>
          <ButtonB
            accessoryLeft={(props) => (
              <Icon name="plus-circle-outline" {...props} />
            )}
            appearance="outline"
            size="giant"
            style={{ marginBottom: 15 }}
          >
            Add another observation
          </ButtonB>
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button>Submit drinks observation</Button>
      </View>
    </Layout>
  );
}
