import { ActivityIndicator, View } from "react-native";
import ProdutoForm from "../components/ProdutoForm";
import { useState } from "react";

export default function ProdutoFormScreen() {
  const url = "https://infnet-reactnative-default-rtdb.firebaseio.com/";
  const resource = "produtos";

  const [isLoading, setLoading] = useState(false);

  const onSubmit = (novoProduto) => {
    setLoading(true);
    fetch(`${url}${resource}.json`, {
      method: "POST",
      body: JSON.stringify(novoProduto),
    })
      .then(async (resp) => {
        const prod = await resp.json();
        const listaProdutos = [...produtos];
        novoProduto.id = prod.name;
        listaProdutos.push(novoProduto);
        setProdutos(listaProdutos);
      })
      .catch((error) => {
        Alert.alert(error.message);
      })
      .finally((_) => setLoading(false));
  };

  return (
    <View>
      <ProdutoForm onSubmit={onSubmit} />
      {isLoading && <ActivityIndicator size={"large"} />}
    </View>
  );
}
