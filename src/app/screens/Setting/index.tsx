import React from "react";
import colors from "@/styles/colors";
import {StyleSheet, Text, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function Setting(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
      <FontAwesome name="user-circle-o" color={colors.lightText} size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    color: colors.lightText,
  },
});

export default Setting;
