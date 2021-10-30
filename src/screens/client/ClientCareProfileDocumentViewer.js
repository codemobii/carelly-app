import React from "react";
import { View, Text } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Layout from "../../layouts/Index";

export default function ClientCareProfileDocumentViewer({ navigation }) {
  return (
    <Layout title="" isBack navigation={navigation}>
      <PDFReader
        source={{
          uri: "http://www.africau.edu/images/default/sample.pdf",
        }}
      />
    </Layout>
  );
}
