import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@rneui/themed";
import { Header } from "@rneui/base";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import theme from './src/app/theme.js';
import { store } from "./src/app/store";
import { Provider as StoreProvider } from "react-redux";
import PwPostList from "./src/features/posts/PwPostList.js";

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Header
            centerComponent={{ text: "Comida Sana", style: { color: "#fff" } }}
          ></Header>
          <ScrollView>
            <PwPostList />
          </ScrollView>
          <StatusBar style="auto" />
        </ThemeProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: theme.innerSpace.normal,
  },
});
