import { View, Text, Pressable, FlatList } from "react-native";
import ProdutoCard from "./ProdutoCard";

export default function ProdutoList({ produtos, action }) {
  const createItemView = ({ item }) => (
    <Pressable onPress={() => action(item)}>
      <ProdutoCard prod={item} />
    </Pressable>
  );

  return (
    <FlatList
      data={produtos}
      renderItem={createItemView}
      // keyExtractor={}
    />
    // <View>
    //     {produtos?.map(prod => (
    //         <Pressable onPress={() => action(prod)}>
    //             <ProdutoCard prod={prod} />
    //         </Pressable>
    //     ))}
    // </View>
  );
}
