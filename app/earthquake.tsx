import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

//this is abouit the earthQuackes
const EarthquakeScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Earthquakes - Sabaragamuwa Province</Text>

      {/* What is an Earthquake? */}
      <Text style={styles.subtitle}>What is an Earthquake?</Text>
      <Text style={styles.text}>
        An earthquake is the shaking of the Earth's surface caused by sudden movements in the Earth's crust.
        In the Sabaragamuwa Province, earthquakes can occur due to tectonic activity or landslides triggered
        by heavy rains.
      </Text>

      {/* Add a Web Image */}
      <Image
        source={{
          uri: "https://i.abcnewsfe.com/a/d0fae42e-6b11-4bcc-b278-cd5731e39b79/earthquake-crack-ht-jt-241205_1733443914570_hpMain_4x3.jpg",
        }}
        style={styles.image}
      />

      {/* Earthquake Safety Tips */}
      <Text style={styles.subtitle}>Earthquake Safety Tips</Text>
      <Text style={styles.text}>
        - Stay calm and take cover under sturdy furniture like a table or desk.{"\n"}
        - If outdoors, move to an open area away from buildings, trees, and power lines.{"\n"}
        - Avoid elevators during an earthquake.{"\n"}
        - Prepare an emergency kit with food, water, and first-aid supplies.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Earthquake-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Areas near fault lines and steep slopes.{"\n"}
        - Balangoda: Regions with unstable terrain.{"\n"}
        - Pelmadulla: Areas prone to landslides triggered by seismic activity.
      </Text>

      {/* Add  Web Image */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmpbwjaiWOq64jlQULbXv8hwZl_KN5fPddg&s",
        }}
        style={styles.image}
      />
    </ScrollView>
  );
};

export default EarthquakeScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb", // Tomato red for emphasis
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