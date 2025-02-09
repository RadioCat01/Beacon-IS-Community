import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const HurricaneScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Hurricane Awareness - Sabaragamuwa Province</Text>

      {/* What is a Hurricane? */}
      <Text style={styles.subtitle}>What is a Hurricane?</Text>
      <Text style={styles.text}>
        A hurricane is a powerful tropical storm with strong winds and heavy rainfall. While hurricanes
        are rare in Sri Lanka, they can cause significant damage if they occur in the Sabaragamuwa Province.
      </Text>

      {/* Hurricane Safety Tips */}
      <Text style={styles.subtitle}>Hurricane Safety Tips</Text>
      <Text style={styles.text}>
        - Stay informed by checking weather alerts regularly.{"\n"}
        - Secure loose outdoor items like furniture and equipment.{"\n"}
        - Stay indoors during the storm and avoid flooded areas.{"\n"}
        - Keep an emergency kit ready with food, water, and medications.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Hurricane-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Low-lying coastal areas.{"\n"}
        - Balangoda: Regions near rivers and streams.{"\n"}
        - Pelmadulla: Areas with poor drainage systems.{"\n"}
      </Text>
       <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAn2FVy_BJNVgyIOXi8ruagJdbedAaUuEp6A&s",
              }}
              style={styles.image}
            />
    </ScrollView>
  );
};

export default HurricaneScreen;

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