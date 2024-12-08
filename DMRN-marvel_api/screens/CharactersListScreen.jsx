import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import md5 from "js-md5";
import env from "../constants/env";

export default function CharactersListScreen() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const fetchApi = () => {
    setLoading(true);
    const { apiUrl, ts, publicKey, privateKey } = env;

    const hash = md5(`${ts}${privateKey}${publicKey}`);

    const uri = `${apiUrl}v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(uri)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (result.code !== 200) {
          throw new Error(result.status || "Erro na API");
        }
        setCharacters(result.data.results);
        setMessage("Sucesso!");
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
      {characters &&
        characters.map((char) => <Text key={char.id}>{char.name}</Text>)}
    </View>
  );
}
