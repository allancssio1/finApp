import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { IHsitoric } from "../../interfaces";
import { Moviments } from "../Moviments";
import { styles } from "./styles";

export function Historic({ movimentations }: IHsitoric) {
  const [isShowMoviments, setIsShowMoviments] = useState(false);

  const toggleShowMoviments = () => {
    setIsShowMoviments(!isShowMoviments);
  };

  return (
    <View style={styles.container}>
      <View style={styles.movimentHeader}>
        <Text style={styles.title}>Movimentações</Text>
        <TouchableOpacity
          style={styles.buttomShowMoviments}
          onPress={toggleShowMoviments}
        >
          <Text style={styles.showMoviments}>
            {isShowMoviments ? "-" : "+"}
          </Text>
        </TouchableOpacity>
      </View>
      {isShowMoviments && (
        <FlatList
          style={styles.list}
          data={movimentations}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <Moviments moviments={item} key={item.id} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
