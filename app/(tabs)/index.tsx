import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, Welcome to My First App by Atul Anand
      </Text>

      {/* Navigate to about page outside tabs */}
      <Link href="/about" style={styles.link}>
        Go to About Page
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "yellow",
  },
});

export default Home;
