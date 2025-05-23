import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/test.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay s průhledným černým pozadím */}
      <View style={styles.dimOverlay} />

      {/* Obsah */}
      <View style={styles.content}>
        <Text style={styles.title}>Jakeho Žolík 🃏♠️</Text>

        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("NewGame")}
        >
          <AntDesign name="plus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative",
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(109, 75, 130, 0.41)", // průhledný černý filtr (nižší opacity)
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 40,
    textAlign: "center",
    color: "#fff",
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#6d4b82",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});
