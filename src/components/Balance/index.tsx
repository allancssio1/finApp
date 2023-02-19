import React from "react";
import { Text, View } from "react-native";
import { IBalance } from "../../interfaces";
import { styles } from "./styles";

export function Balance({ balance }: IBalance) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Saldo</Text>
        <View style={styles.balance}>
          <Text style={styles.currencySimble}>R$</Text>
          <Text style={styles.currency}>{balance.balans.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Gastos</Text>
        <View style={styles.balance}>
          <Text style={styles.currencySimble}>R$</Text>
          <Text style={styles.exprenses}>{balance.besteding.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}
