import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@rneui/themed";
import { Header } from "@rneui/base";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from './theme.js';

import PwCard from "./components/PwCard.js";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header
          centerComponent={{ text: "Comida Sana", style: { color: "#fff" } }}
        ></Header>
        <ScrollView>
          <PwCard title="Publicación 1"></PwCard>
          <PwCard title="Publicación 2"></PwCard>
          <PwCard title="Publicación 3"></PwCard>
          <PwCard title="Publicación 4"></PwCard>
        </ScrollView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: theme.innerSpace.normal,
  },
});
