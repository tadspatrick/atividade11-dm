import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Divider } from "react-native-paper";
import styles from "./styles";

function Register() {
  const create = useSelector((state) => state.create);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Usuários</Text>
      <ScrollView>
        {create.map((item, index) => {
          return [
            <Text style={styles.text} key={index}>
              {item.nome}{" "}
            </Text>,
            <Text style={styles.text} key={index}>
              {item.email} {item.telefone}
            </Text>,
            <Divider />,
          ];
        })}
      </ScrollView>
    </View>
  );
}

export default Register;
