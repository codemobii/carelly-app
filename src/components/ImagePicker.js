import React, { useState, useEffect } from "react";
import { Image, View, Platform } from "react-native";
import * as ImagePickerB from "expo-image-picker";
import { Button, Icon } from "@ui-kitten/components";

export default function ImagePicker() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePickerB.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePickerB.launchImageLibraryAsync({
      mediaTypes: ImagePickerB.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        appearance="outline"
        size="giant"
        accessoryLeft={(props) => <Icon name="camera-outline" {...props} />}
        onPress={pickImage}
        style={{ marginTop: 15, width: "100%" }}
      >
        Upload a picture
      </Button>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 1 }}
        />
      )}
    </View>
  );
}
