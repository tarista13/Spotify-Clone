import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PlayerContext } from "./PlayerContext";
import Navigation from "./navigation/MainContainer";

function App() {
  return (
    <>
      <PlayerContext>
        <Navigation />
      </PlayerContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
