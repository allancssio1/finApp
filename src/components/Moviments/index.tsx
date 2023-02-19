import React from "react";
import { Text, View } from "react-native";
import { IMoviments } from "../../interfaces";
import { styles } from "./styles";

export function Moviments({
  moviments: { label, type, value, createdAt, id },
}: IMoviments) {
  const isBalans = type && type === "balans" ? true : false;
  return (
    <View style={styles.container} key={id}>
      <Text style={styles.subject}>{label}</Text>
      <View style={styles.infos}>
        <Text style={isBalans ? styles.balans : styles.besteding}>
          R$ {!isBalans && "-"}
          {Number(value).toFixed(2).replace(".", ",")}
        </Text>
        <Text style={styles.date}>{createdAt}</Text>
      </View>
    </View>
  );
}
