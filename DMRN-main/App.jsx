import { useState } from "react";
import ProdutosListScreen from "./screens/ProdutosListScreen";
import ProdutoFormScreen from "./screens/ProdutoFormScreen";
import ProdutoShowScreen from "./screens/ProdutoShow/ProdutoShowScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // URL: https://infnet-reactnative-default-rtdb.firebaseio.com/
  // URI = URL + RECURSO: https://infnet-reactnative-default-rtdb.firebaseio.com/produtos.json
  //GET, POST, PUT, PATCH, DELETE

  //const url = "https://infnet-reactnative-default-rtdb.firebaseio.com/";
  //const resource = "produtos";

  // const [produtos, setProdutos] = useState([
  //   { id: 1, nome: "Arroz", preco: 20.5, local: "Mercado", data: "2024-10-24" },
  //   {
  //     id: 2,
  //     nome: "Sabonete",
  //     preco: 5.99,
  //     local: "Farmácia",
  //     data: "2024-10-24",
  //   },
  //   { id: 3, nome: "Café", preco: 12.75, local: "Mercado", data: "2024-10-24" },
  //   {
  //     id: 4,
  //     nome: "Remédio para dor",
  //     preco: 24.0,
  //     local: "Farmácia",
  //     data: "2024-10-24",
  //   },
  //   { id: 5, nome: "Leite", preco: 7.3, local: "Mercado", data: "2024-10-24" },
  // ]);

  // const [isLoading, setLoading] = useState(false);

  // const gerarNovoId = (_) => {
  //   const listaProdutos = [...produtos];
  //   const ultimoIndice = listaProdutos.length - 1;
  //   if (ultimoIndice > 0) {
  //     const ultimoProd = listaProdutos[ultimoIndice];
  //     const ultimoId = ultimoProd.id;
  //     return ultimoId + 1;
  //   }
  //   return 1;
  // };

  // const onSubmit = (novoProduto) => {
  //   setLoading(true);
  //   fetch(`${url}${resource}.json`, {
  //     method: "POST",
  //     body: JSON.stringify(novoProduto),
  //   })
  //     .then(async (resp) => {
  //       const prod = await resp.json();
  //       const listaProdutos = [...produtos];
  //       novoProduto.id = prod.name;
  //       listaProdutos.push(novoProduto);
  //       setProdutos(listaProdutos);
  //     })
  //     .catch((error) => {
  //       Alert.alert(error.message);
  //     })
  //     .finally((_) => setLoading(false));
  // };

  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator>
  //       <Drawer.Screen
  //         name="ProdutosList"
  //         options={() => ({
  //           title: "Lista de Produtos",
  //         })}
  //       >
  //         {(props) => <ProdutosListScreen {...props} produtos={produtos} />}
  //       </Drawer.Screen>
  //       <Drawer.Screen
  //         name="ProdutoForm"
  //         options={() => ({
  //           title: "Novo Produto",
  //         })}
  //       >
  //         {(_) => <ProdutoFormScreen onSubmit={onSubmit} />}
  //       </Drawer.Screen>
  //       <Drawer.Screen
  //         name="ProdutoShow"
  //         options={() => ({
  //           title: "Produto",
  //         })}
  //         component={ProdutoShowScreen}
  //       />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );

  /* return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='ProdutosList'
          options={() => ({
            title: 'Lista de Produtos'
          })}
          >
          {props => <ProdutosListScreen {...props} produtos={produtos}/>}
        </Tab.Screen>
        <Tab.Screen 
          name='ProdutoForm'
          options={() => ({
            title: 'Novo Produto'
          })}
          >
          {_ => <ProdutoFormScreen onSubmit={onSubmit} />}
        </Tab.Screen>
        <Tab.Screen 
          name='ProdutoShow' 
          options={() => ({
            title: 'Produto',
          })}
          component={ProdutoShowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProdutosList"
          options={() => ({
            title: "Lista de Produtos",
          })}
        >
          {(props) => <ProdutosListScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ProdutoForm"
          options={() => ({
            title: "Novo Produto",
          })}
          component={ProdutoFormScreen}
        />
        <Stack.Screen
          name="ProdutoShow"
          options={() => ({
            title: "Produto",
          })}
          component={ProdutoShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
