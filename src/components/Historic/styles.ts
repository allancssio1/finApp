import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    marginBottom: 16,
  },
  movimentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: 16,
    marginStart: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    color: "#000",
  },
  buttomShowMoviments: {
    backgroundColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24 / 2,
    width: 24,
    height: 24,
  },
  showMoviments: {
    fontWeight: "bold",
    fontSize: 20,
  },
  list: {
    marginStart: 16,
    marginEnd: 16,
  },
});
