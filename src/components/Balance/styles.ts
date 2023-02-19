import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: -24,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 12,
    zIndex: 99,
  },
  card: {},
  title: {
    fontSize: 20,
    color: "#C0C0C0",
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySimble: {
    color: "#A9A9A9",
    marginRight: 8,
  },
  currency: {
    fontSize: 22,
    color: "#2ecc71",
  },
  exprenses: {
    fontSize: 22,
    color: "#e73c3c",
  },
});
