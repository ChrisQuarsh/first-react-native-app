import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PetScreen from "./components/PetScreen";
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PetScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(166, 144, 218, 0)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
