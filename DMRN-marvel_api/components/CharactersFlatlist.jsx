import { View, Text, FlatList } from "react-native";
import React from "react";

import CharactersListItem from "./CharactersListItem";

export default function CharactersFlatlist({ characters }) {
  return (
    <FlatList
      data={characters}
      renderItem={({ item }) => <CharactersListItem character={item} />}
    />
  );
}
