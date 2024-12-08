import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CharactersListItem({ character }) {
  const { name, description, thumbnail } = character;
  const { path, extension } = thumbnail;
  const imageUri = `${path}.${extension}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
});
