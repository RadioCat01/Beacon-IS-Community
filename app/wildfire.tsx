import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const WildfireScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Wildfires - Sabaragamuwa Province</Text>

      {/* What is a Wildfire? */}
      <Text style={styles.subtitle}>What is a Wildfire?</Text>
      <Text style={styles.text}>
        A wildfire is an uncontrolled fire that spreads rapidly through vegetation. In the Sabaragamuwa
        Province, wildfires often occur during dry seasons in forested areas.
      </Text>

      {/* Wildfire Prevention Tips */}
      <Text style={styles.subtitle}>Wildfire Prevention Tips</Text>
      <Text style={styles.text}>
        - Avoid burning trash or leaves during dry seasons.{"\n"}
        - Report any signs of smoke or fire to local authorities immediately.{"\n"}
        - Create defensible spaces around homes by clearing dry vegetation.{"\n"}
        - Follow evacuation instructions promptly.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Wildfire-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Forested areas near hills.{"\n"}
        - Balangoda: Dry grasslands and shrublands.{"\n"}
        - Pelmadulla: Agricultural fields with dry vegetation.
      </Text>

        <Image
           source={{
              uri: "https://www.defence.lk/upload/article_images/20210613_bushfire_00.jpg",
                 }}
               style={styles.image}
                 />
    </ScrollView>
  );
};

export default WildfireScreen;

// Styles (reuse the same styles as above)
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb", 
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
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff", // Blue color for the back button
  },
  image: {
    width: "100%",
    height: 200, // Fixed height for the image
    resizeMode: "cover",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
});