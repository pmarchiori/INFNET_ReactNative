import { View, Text, StyleSheet, Platform } from "react-native";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";

export default function ProdutoCard({ prod, actionRemove, actionShow }) {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        //da esquerda p/ a direita
        renderLeftActions={(_, drag) => {
          const styleAnimation = useAnimatedStyle(() => {
            return {
              transform: [{ translateX: drag.value - 100 }],
            };
          });
          return (
            <Reanimated.View style={[styleAnimation, { flexDirection: "row" }]}>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#f4a261",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => actionRemove(prod)}
              >
                <Text>Excluir</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#219ebc",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Editar</Text>
              </Pressable>
            </Reanimated.View>
          );
        }}
        renderRightActions={(_, drag) => {
          const styleAnimation = useAnimatedStyle(() => {
            return {
              transform: [{ translateX: drag.value + 50 }],
            };
          });
          return (
            <Reanimated.View style={[styleAnimation, { flexDirection: "row" }]}>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#2a9d8f",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => actionShow(prod)}
              >
                <Text>Exibir</Text>
              </Pressable>
            </Reanimated.View>
          );
        }}
      >
        <View style={styles.container}>
          {/* {Platform.OS == 'web' ? <Text>Web</Text> : <Text>Android</Text>} */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardTextH3}>{prod.nome}</Text>
            <Text style={styles.cardTextH4}>R$ {prod.preco.toFixed(2)}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text>{prod.local}</Text>
            <Text>{prod.data}</Text>
          </View>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#8d99ae",
    borderRadius: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTextH3: {
    fontSize: 18,
  },
  cardTextH4: {
    fontSize: 16,
  },
});

// export styles;
// import { styles } from "arquivo.js";
