import React from "react";
import colors from "@/styles/colors";
import {API_URL} from "@env";
import {StyleSheet, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function Home(): React.JSX.Element {
  const url = API_URL;
  return (
    <View style={styles.container}>
      <Text style={styles.homeText} className="text-2xl">
        HOME VAR
      </Text>
      <AntDesign name="home" color={colors.lightText} size={24} />
      <Text style={styles.homeText}>ENV={url}</Text>
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
  homeText: {
    color: colors.lightText,
  },
});

export default Home;
