import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  Pressable,
} from "react-native";

export default function ProdutoForm({ onSubmit }) {
  const [produtoNome, setProdutoNome] = useState("");
  const [produtoPreco, setProdutoPreco] = useState("");
  const [produtoLocal, setProdutoLocal] = useState("");
  const [produtoData, setProdutoData] = useState(new Date());
  const [produtoPromocao, setProdutoPromocao] = useState(false);
  const [dateTimePickerShow, setDateTimePickerShow] = useState(false);

  const listaLocais = [
    { label: "Mercado", value: "Mercado" },
    { label: "Farmácia", value: "Farmácia" },
    { label: "Padaria", value: "Padaria" },
    { label: "Bar", value: "Bar" },
    { label: "Lanchonete", value: "Lanchonete" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Cadastro de Produto</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nome"
        keyboardType="default"
        value={produtoNome}
        onChangeText={setProdutoNome}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Preço (R$)"
        keyboardType="decimal-pad"
        value={produtoPreco}
        onChangeText={setProdutoPreco}
      />
      {/* <TextInput
        style={styles.textInput}
        placeholder="Local"
        keyboardType="default"
        value={produtoLocal}
        onChangeText={setProdutoLocal}
      /> */}
      <View style={styles.textInput}>
        <Text>Local</Text>
        <Picker selectedValue={produtoLocal} onValueChange={setProdutoLocal}>
          <Picker.Item label="Selecione uma opção" value="" />
          {listaLocais.map((local) => (
            <Picker.Item label={local.label} value={local.value} />
          ))}
        </Picker>
      </View>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#003049" : "#90e0ef",
            color: pressed ? "" : "",
          },
          styles.pressableContainer,
        ]}
        onPress={() => setDateTimePickerShow(true)}
      >
        <View>
          <Text>Data</Text>
          <Text>{produtoData.toLocaleDateString("pt-br")}</Text>
        </View>
      </Pressable>

      {dateTimePickerShow && (
        <DateTimePicker
          //mode="date"
          //display="calendar"
          maximumDate={new Date()}
          value={produtoData}
          onChange={(_, date) => {
            setDateTimePickerShow(false);
            if (date) {
              setProdutoData(date);
            }
          }}
        />
      )}
      {/* <TextInput
        style={styles.textInput}
        placeholder="Data"
        keyboardType="default"
        value={produtoData}
        onChangeText={setProdutoData}
      /> */}
      <View style={[styles.switchInput, styles.textInput]}>
        <Text>Promoção:</Text>
        <Text>Não</Text>
        <Switch
          value={produtoPromocao}
          onValueChange={setProdutoPromocao}
          disabled={false}
        />
        <Text>Sim</Text>
      </View>
      <Button
        title="Salvar"
        onPress={() => {
          const novoProduto = {
            nome: produtoNome,
            preco: +produtoPreco,
            local: produtoLocal,
            data: produtoData,
            promocao: produtoPromocao,
          };
          onSubmit(novoProduto);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header1: {
    fontSize: 26,
    textAlign: "center",
    margin: 6,
  },
  textInput: {
    fontSize: 20,
    padding: 10,
    margin: 4,
    backgroundColor: "#ced4da",
    borderBottomWidth: 1,
    borderBottomColor: "#6c757d",
    borderRadius: 5,
  },
  switchInput: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
