import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
