import React, { useState } from "react";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

const AddLink = ({ onAdd }) => {
  const [link, setLink] = useState("");

  const onSubmit = () => {
    if (link) onAdd({ link });
    setLink("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your link here..."
        onChangeText={setLink}
        value={link}
        maxLength={255}
        onSubmitEditing={onSubmit}
        autoComplete="off"
        autoCorrect={false}
        textContentType="URL"
        autoCapitalize="none"
      />
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Cut.It</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    color: "#0f0f22",
    backgroundColor: "#eeeeee",
    padding: 8,
    borderRadius: 5,
    marginTop: 32,
    fontSize: 22,
    width: "85%",
  },
  submit: {
    backgroundColor: "#5d8aa8",
    borderRadius: 8,
    marginTop: 12,
    padding: 12,
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "#eeeeee",
    fontSize: 22,
  },
});

export default AddLink;
