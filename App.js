import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import AddLink from "./components/Form";
import Result from "./components/Result";
import Notification from "./components/Notification";

export default function App() {
  const [result, setResult] = useState("");

  const submitLink = async (link) => {
    var header = new Headers();
    header.append("Accept", "application/json");
    header.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      link: link,
    });

    var requestOptions = {
      method: "POST",
      headers: header,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://192.168.1.3:8000/api/shorten", requestOptions)
      .then((response) => response.json())
      .then((result) => setResult(result))
      .catch((error) => console.log("error", error));
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
      {result?.["message"] &&
        (result["message"] != "Invalid link" ? (
          <Result link={result["message"]} qr={result["qr"]} />
        ) : (
          <Notification content={"Invalid link"} press={() => setResult("")} />
        ))}
      <StatusBar style="auto" />
    </View>
  );
}

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
