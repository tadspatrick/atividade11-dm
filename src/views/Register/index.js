import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function Register() {
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  function navegar() {
    navigation.navigate("List");
  }

  function add() {
    const user = {
      nome: nome,
      telefone: telefone,
      email: email,
    };

    dispatch({ type: "updateUser", payload: user });
    alert("[OK] Registrado com Sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="nome"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="telefone"
        onChangeText={(text) => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.button}>
        <Button title="Registrar" color="#6E5494" onPress={() => add()} />
      </View>
    </View>
  );
}

export default Register;
