import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

import ProdutoList from "../components/ProdutoList";
import ProgressBar from "../components/ProgressBar";

export default function ProdutosListScreen({ navigation }) {
  //rest api
  //uri = url + recurso
  const url = "https://infnet-reactnative-default-rtdb.firebaseio.com/";
  const resource = "produtos";

  const [produtos, setProdutos] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //GET - método padrão de requisição (quando não se especifica o método)
    fetch(`${url}${resource}.json`)
      .then((res) => res.json()) //quando retorna com sucesso
      .then((prods) => {
        const produtosIds = Object.keys(prods);
        const produtos = Object.values(prods);
        let listaProdutos = [];
        produtosIds.forEach((id, index) => {
          listaProdutos.push({ id, ...produtos[index] });
        });
        setProdutos(listaProdutos);
      })
      .catch((error) => setMessage(error.message)) //quando retorna com falha
      .finally(setLoading(false)); //independe de como retorna
  }, []);

  const action = (produto) => {
    navigation.navigate("ProdutoShow", produto);
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}
      {!isLoading && message && <Text>{message}</Text>}
      {!isLoading && produtos && (
        <View style={styles.listContainer}>
          <ProdutoList produtos={produtos} action={action} />
        </View>
      )}
      {!isLoading && produtos.length == 0 && (
        <Text>Nenhum produto cadastrado.</Text>
      )}
      {/* <ProgressBar /> */}
      <View style={styles.navContainer}>
        <Pressable
          style={styles.navOption}
          onPress={() => {
            navigation.navigate("ProdutoForm");
          }}
        >
          <Text style={styles.navOptionLabel}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  listContainer: {
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navOption: {
    paddingVertical: 8,
    width: 45,
    backgroundColor: "#8ecae6",
    alignItems: "center",
    borderRadius: 50,
  },
  navOptionLabel: {
    fontSize: 20,
  },
});
