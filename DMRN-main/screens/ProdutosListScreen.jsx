import { View, Pressable, Text, StyleSheet } from "react-native";
import ProdutoList from "../components/ProdutoList";

export default function ProdutosListScreen({ navigation, produtos }) {
  const action = (produto) => {
    navigation.navigate("ProdutoShow", produto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <ProdutoList produtos={produtos} action={action} />
      </View>
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
