import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BootSplash from "react-native-bootsplash";

let App = () => {
  useEffect(() => {
    BootSplash.hide({ duration: 2000 });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    margin: 20,
    lineHeight: 30,
    color: "#333",
    textAlign: "center",
  },
  bootsplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    height: 100,
    width: 100,
  },
});

export default App;
