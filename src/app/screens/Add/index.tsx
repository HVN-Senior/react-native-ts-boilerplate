import React from "react";
import colors from "@/styles/colors";
import {StyleSheet, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Add(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD</Text>
      <Ionicons name="add-circle-outline" color={colors.lightText} size={24} />
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

export default Add;
