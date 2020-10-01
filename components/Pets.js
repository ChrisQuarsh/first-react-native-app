import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function Pets({ name, type, age, location, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageContainer} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {" "}
          {name}
        </Text>
        <Text style={styles.infoDetails}>{type}</Text>
        <Text style={styles.infoDetails}>{age}</Text>
        <Text style={styles.infoDetails}>
          {" "}
          <EvilIcons name="location" size={15} />
          {location}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    marginHorizontal: 40,
    backgroundColor: "rgba(215, 198, 255, 0)",
  },
  imageContainer: {
    width: 160,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    marginVertical: 5,
    justifyContent: "flex-start",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: "purple",
  },
  infoDetails: {
    marginHorizontal: 10,
    color: "#BEB8C7",
    fontSize: 12,
    marginBottom: 3,
  },
  icon: {
    alignSelf: "flex-start",
    paddingLeft: "0",
  },
});
