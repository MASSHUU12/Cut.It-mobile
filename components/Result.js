import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
//!import Clipboard from "@react-native-community/clipboard";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  Linking,
  Image,
} from "react-native";

const Result = ({ link, qr }) => {
  const [showQR, setShowQR] = useState(false);

  const copyLink = () => {
    Clipboard.setString(link);
  };

  const openInBrowser = async () => {
    await Linking.canOpenURL(link);
    Linking.openURL("http://" + link);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={openInBrowser}>
          <Text selectable={true} style={styles.text}>
            {link}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={copyLink}>
          <Icon name="copy1" color="#eee" size={22} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowQR(!showQR);
        }}
      >
        <Text style={styles.btnText}>
          {!showQR ? "Show QR Code" : "Hide QR Code"}
        </Text>
      </TouchableOpacity>
      {showQR && <Image style={styles.qr} source={{ uri: qr }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 16,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    padding: 8,
    borderRadius: 6,
  },
  text: {
    color: "#eeeeee",
    fontSize: 22,
  },
  qr: {
    width: 256,
    height: 256,
    borderRadius: 12,
  },
  btnText: {
    color: "#eee",
    fontSize: 18,
    marginTop: 8,
  },
});

export default Result;
