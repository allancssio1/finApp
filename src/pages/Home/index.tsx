import React, { useState } from "react";
import { Text, View } from "react-native";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Historic } from "../../components/Historic";
import { styles } from "./styles";

export function Home() {
  const [balance, setBalance] = useState({
    besteding: 2000.5,
    balans: 3001.444,
  });
  const [movimentations, setMovimentations] = useState([
    {
      id: 1,
      label: "Enel",
      value: "130.50",
      createdAt: "10/01/2023",
      type: "besteding",
    },
    {
      id: 2,
      label: "Cagece",
      value: "91.00",
      createdAt: "10/01/2023",
      type: "besteding",
    },
    {
      id: 3,
      label: "Honda",
      value: "409.90",
      createdAt: "10/01/2023",
      type: "besteding",
    },
    {
      id: 4,
      label: "Pix recebido",
      value: "10.70",
      createdAt: "10/01/2023",
      type: "balans",
    },
  ]);

  return (
    <View>
      <Header userName={"Allan Cássio"} />
      <Balance balance={balance} />
      <Historic movimentations={movimentations} />
    </View>
  );
}
