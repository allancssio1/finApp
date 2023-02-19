import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { IHeader } from "../../interfaces";

export function Header({ userName }: IHeader) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>Olá, {userName}</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
          <Feather name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
