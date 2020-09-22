import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/landscape.jpg")} style={styles.image} />

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label, styles.info]}>Thor</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label, styles.info]}>sonofOden@mail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label, styles.info]}>Male</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Details</Text>
        <Text style={[styles.label, styles.info]}>GodofThunder</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nicky</Text>
        <Text style={[styles.label, styles.info]}>Sparkles</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  image: {
    height: 150,
    width: 150,
    marginVertical: 50,
    alignSelf: "center",
    borderRadius: 75,
  },

  detailContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },

  label: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    flex: 2.5,
    paddingHorizontal: 5,
  },

  info: {
    flex: 7.5,
  },
});

export default App;
