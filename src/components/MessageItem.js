import { Avatar, Text } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MessageItem({
  isSameUser = false,
  isAuthUser = false,
  onPressAvatar = null,
  isImg = false,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
        right: 0,
      }}
    >
      <TouchableOpacity onPress={onPressAvatar}>
        <Avatar
          size="medium"
          source={{
            uri: "https://doodleipsum.com/600/avatar?shape=circle&bg=ceebff",
          }}
          style={{ opacity: !isSameUser && !isAuthUser ? 1 : 0 }}
        />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: isAuthUser ? "#50CCCC" : "#fff",
          padding: 20,
          maxWidth: 280,
          borderRadius: 20,
          borderTopLeftRadius: !isAuthUser ? 0 : 20,
          borderTopRightRadius: !isAuthUser ? 20 : 0,
          marginLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: isAuthUser && "#fff",
            }}
          >
            Job Karim
          </Text>
          <Text style={{ fontSize: 12, color: isAuthUser && "#fff" }}>
            {" "}
            — 3:23 PM
          </Text>
        </View>
        {isImg ? (
          <Image
            source={{
              uri: "https://camilledarracq.com/wp-content/uploads/2021/03/illu_52-tropicool-500x500.jpg",
            }}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
        ) : (
          <Text style={{ color: isAuthUser && "#fff" }}>
            I'm just looking around. Will you tell me something about yourself?
          </Text>
        )}
      </View>
    </View>
  );
}
