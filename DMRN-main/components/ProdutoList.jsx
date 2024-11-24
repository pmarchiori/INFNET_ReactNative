import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import ProdutoCard from "./ProdutoCard";

export default function ProdutoList({ produtos, actionRemove, actionShow }) {
  // const createItemView = ({ item }) => (
  //   <Pressable
  //     style={({ pressed }) => [
  //       {
  //         backgroundColor: pressed ? "#f1faee" : "#f9f7f3",
  //       },
  //       styles.pressableContainer,
  //     ]}
  //     onPress={() => action(item)}
  //   >
  //     <ProdutoCard prod={item} />
  //   </Pressable>
  // );

  const createItemView = ({ item }) => (
    <ProdutoCard
      prod={item}
      actionRemove={actionRemove}
      actionShow={actionShow}
    />
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

const styles = StyleSheet.create({
  pressableContainer: {
    borderRadius: 5,
    ...Platform.select({
      android: { marginTop: 10 },
      ios: { marginTop: 15 },
      web: { marginTop: 20 },
    }),
  },
});
