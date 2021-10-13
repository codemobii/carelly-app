import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Layout from "../../layouts/Index";
import Button from "../../components/Button";
import { Text } from "@ui-kitten/components";

export default function ClientCheckout({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate("ClientDetails");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Layout title="Checkout" isBack navigation={navigation}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
        }}
      >
        <Button onPress={() => navigation.navigate("ClientCheckoutUnable")}>
          Unable to scan the QR code
        </Button>
      </View>
    </Layout>
  );
}
