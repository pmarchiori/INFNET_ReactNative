import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import md5 from "js-md5";
import env from "../constants/env";

import CharactersFlatlist from "../components/CharactersFlatlist";

export default function CharactersListScreen() {
  const [characters, setCharacters] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const fetchApi = () => {
    setLoading(true);
    const { apiUrl, ts, publicKey, privateKey } = env;

    const hash = md5(`${ts}${privateKey}${publicKey}`);
    const qLimit = `limit=${limit}`;
    const qOffset = `offset=${offset}`;

    const uri = `${apiUrl}v1/public/characters?${qLimit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(uri)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (result.code == 200) {
          const { data } = result;
          const { offset, limit, results: characters } = data;
          setOffset(offset);
          setLimit(limit);
          setCharacters(characters);
        }
      })
      .catch((error) => setMessage(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <View>
      <Text>Personagens</Text>
      {isLoading && <ActivityIndicator />}
      {message && <Text>{message}</Text>}
      <Text>Offset: {offset}</Text>
      <Text>Limit: {limit}</Text>
      <Text>Quant: {characters?.length}</Text>

      <CharactersFlatlist characters={characters} />
    </View>
  );
}
