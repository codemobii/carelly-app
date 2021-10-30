import { Avatar, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/Button";

export default function Onboarding({ navigation }) {
  return (
    <Layout
      level="1"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingHorizontal: 25,
      }}
    >
      <View
        style={{
          height: 364,
          width: "100%",
          position: "relative",
        }}
      >
        <Avatar
          style={[styles.avatar, { right: 0, width: 123, height: 123 }]}
          source={{
            uri: "https://ak.picdn.net/shutterstock/videos/1034484149/thumb/8.jpg",
          }}
        />

        <Avatar
          style={[styles.avatar, { left: 0, top: 80, width: 128, height: 128 }]}
          source={{
            uri: "https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=",
          }}
        />

        <Avatar
          style={[
            styles.avatar,
            { bottom: 0, right: 0, width: 154, height: 154 },
          ]}
          source={{
            uri: "https://i.pinimg.com/originals/fe/61/db/fe61dba545c0b8b87a722cad8408d37d.jpg",
          }}
        />
      </View>

      <Text
        category="p1"
        style={{ textAlign: "center", fontSize: 22, marginTop: 50 }}
      >
        Accomplish your caring goal easily and carelly!
      </Text>

      <View style={{ marginTop: 50, width: "100%" }}>
        <Button
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          Get Started
        </Button>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    borderRadius: 100,
  },
});
