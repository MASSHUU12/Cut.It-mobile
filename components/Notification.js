import { View, Text, StyleSheet, Pressable } from "react-native";

const Notification = ({ content, press }) => {
  return (
    <View>
      <Pressable onPress={press}>
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#eee",
    fontSize: 22,
    margin: 8,
    fontWeight: "bold",
  },
});

export default Notification;
