import React from "react";
import colors from "@/styles/colors";
import {StyleSheet, Text, View} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

function Search(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <Octicons name="search" color={colors.lightText} size={24} />
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

export default Search;
