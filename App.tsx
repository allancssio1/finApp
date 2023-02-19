import { StatusBar } from "react-native";
import { View } from "react-native";
import { Home } from "./src/pages/Home";
import { styles } from "./Styles";

export default function App() {
  return (
    <View style={styles.App}>
      <StatusBar
        barStyle={"light-content"}
        // translucent
      />
      <Home />
    </View>
  );
}
