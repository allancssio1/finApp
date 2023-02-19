import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 48,
    paddingTop: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48 / 2,
  },
});
