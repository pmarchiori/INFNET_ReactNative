import { useEffect, useMemo, useState } from "react";
import { Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import ItemList from "./components/ItemList";

export default function App() {
  const uri = "https://api.magicthegathering.io/v1/cards";

  const [response, setResponse] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [page, setPage] = useState(0);
  const [isRefreshing, setRefreshing] = useState(false);

  const fetchItems = () => {
    const nextPage = page + 1;
    fetch(`${uri}?pageSize=10&page=${nextPage}`)
      .then((resp) => resp.json())
      .then((data) => {
        setResponse(data);
        setPage(nextPage);
      })
      .catch((error) => setMessage(error.setMessage))
      .finally((_) => setLoading(false));
  };

  const onRefresh = () => {
    setRefreshing(true);
    setCards([]);
    fetch(`${uri}?pageSize=10`)
      .then((resp) => resp.json())
      .then((data) => {
        setResponse(data);
        setPage(1);
      })
      .catch((error) => setMessage(error.setMessage))
      .finally((_) => setRefreshing(false));
  };

  useEffect(() => {
    setLoading(true);
    fetchItems();
  }, []);

  useEffect(() => {
    if (response?.cards) {
      setCards(cards.concat(response.cards));
    }
  }, [response]);

  // const cards = useMemo(() => {
  //   if (response?.cards) {
  //     return response.cards;
  //   } else return [];
  // }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <ItemList card={item} />}
        onEndReached={fetchItems}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: 30,
    paddingLeft: 10,
  },
});
