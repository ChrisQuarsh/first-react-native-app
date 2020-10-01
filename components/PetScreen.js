import React from "react";
import { View, FlatList } from "react-native";
import Pets from "./Pets";

export default function PetScreen() {
  const pets = [
    {
      name: "Offset",
      type: "Dog",
      age: "4 years",
      location: "Uptee",
      image: require("../assets/doberman.jpg"),
    },
    {
      name: "Blue ",
      type: "Parrot",
      age: "2 years",
      location: "Arizona",
      image: require("../assets/parrot.jpg"),
    },
    {
      name: "Tusky",
      type: "Cat",
      age: "3 years",
      location: "Camoa",
      image: require("../assets/cat.jpg"),
    },
    {
      name: "Rufus",
      type: "Dog",
      age: "5 years",
      location: "Delaware",
      image: require("../assets/boerboel.jpg"),
    },
  ];
  return (
    <View>
      <FlatList
        data={pets}
        renderItem={({ item }) => {
          return (
            <Pets
              name={item.name}
              type={item.type}
              age={item.age}
              image={item.image}
              location={item.location}
            />
          );
        }}
        keyExtractor={(item) => item.location}
      />
    </View>
  );
}
