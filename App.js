import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={() => alert("Button tapped")} />
      <Text onPress={() => console.log("Text pressed")}>
        Hello React Native
      </Text>

      <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
        <Image source={require("./assets/icon.png")} />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",

    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
