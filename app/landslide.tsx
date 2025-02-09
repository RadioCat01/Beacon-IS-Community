import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const LandslideScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Landslides - Sabaragamuwa Province</Text>

      {/* What is a Landslide? */}
      <Text style={styles.subtitle}>What is a Landslide?</Text>
      <Text style={styles.text}>
        A landslide is the movement of rock, soil, and debris down a slope. In the Sabaragamuwa Province,
        landslides are often triggered by heavy rains and deforestation.
      </Text>

      {/* Landslide Prevention Tips */}
      <Text style={styles.subtitle}>Landslide Prevention Tips</Text>
      <Text style={styles.text}>
        - Avoid building homes on steep slopes or near riverbanks.{"\n"}
        - Plant trees and vegetation to stabilize soil.{"\n"}
        - Monitor cracks or unusual ground movements.{"\n"}
        - Follow evacuation instructions from local authorities.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Landslide-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Steep slopes near hills.{"\n"}
        - Balangoda: Areas with loose soil and heavy rainfall.{"\n"}
        - Pelmadulla: Regions with deforested land.
      </Text>

       <Image
                    source={{
                      uri: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/889C/production/_89727943_e208840f-fac6-425c-b25a-a2deec729fd0.jpg",
                    }}
                    style={styles.image}
                  />
    </ScrollView>
  );
};

export default LandslideScreen;

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