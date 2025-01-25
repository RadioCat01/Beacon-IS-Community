import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const FloodScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Flood Alert</Text>
      
      
      <Text style={styles.subtitle}>What is a Flood?</Text>
      <Text style={styles.text}>
        A flood is an overflow of water that submerges land that is usually dry.
        It can occur due to various factors such as heavy rainfall, river overflow, 
        or dam failure. Floods can be dangerous and cause significant damage to property and life.
      </Text>

      <Text style={styles.subtitle}>Flood Prevention Tips</Text>
      <Text style={styles.text}>
        - Stay informed by checking weather alerts regularly.{"\n"}
        - Avoid driving through flooded areas.{"\n"}
        - Keep emergency supplies ready, including food, water, and medications.{"\n"}
        - Move to higher ground if you are in a flood-prone area.
      </Text>

      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>Call 911 for emergency assistance.</Text>
      <Text style={styles.text}>National Flood Helpline: 123-456-7890</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6347",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
});

