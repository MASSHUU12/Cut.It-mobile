import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import AddLink from "./components/Form";

export default function App() {
  const submitLink = async (link) => {
    console.log(link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Cut.It</Text>
      <Text style={styles.containerDesc}>
        Most link shorteners do too much.
      </Text>
      <Text style={styles.containerDesc}>
        This one just makes your links shorter.
      </Text>
      <AddLink onAdd={submitLink} />
      <StatusBar style="auto" />
    </View>
  );
}

/**
$color-third: #454545;
$color-fourth: #5d8aa8;
$color-alt: #496f89;
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f0f22",
  },
  containerText: {
    color: "#eeeeee",
    fontSize: 64,
  },
  containerDesc: {
    color: "#9f9fa7",
    fontWeight: "bold",
    width: "85%",
    textAlign: "center",
    fontSize: 16,
  },
});
