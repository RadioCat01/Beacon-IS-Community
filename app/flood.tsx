import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const FloodScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Floods - Sabaragamuwa Province</Text>

      {/* Image */}
      {/* <Image
        source={require("../../../../assets/disasters/flood.jpg")}
        style={styles.image}
      /> */}

      {/* What is a Flood? */}
      <Text style={styles.subtitle}>What is a Flood?</Text>
      <Text style={styles.text}>
        A flood occurs when water submerges land that is usually dry. In the Sabaragamuwa Province,
        floods are often caused by heavy monsoon rains, overflowing rivers like the Kalu Ganga and
        Nilwala Ganga, or poor drainage systems. These floods can lead to loss of life, damage to
        homes, and destruction of crops.
      </Text>

      {/* Flood Prevention Tips */}
      <Text style={styles.subtitle}>Flood Prevention Tips</Text>
      <Text style={styles.text}>
        - Stay informed by checking weather alerts from the Department of Meteorology.{"\n"}
        - Avoid crossing flooded bridges or roads, especially during heavy rains.{"\n"}
        - Keep emergency supplies ready, including food, water, medications, and flashlights.{"\n"}
        - Move valuable items to higher ground if you live near riverbanks or low-lying areas.{"\n"}
        - Follow evacuation instructions from local authorities promptly.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Flood-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Low-lying areas near the Kalu Ganga River.{"\n"}
        - Balangoda: Areas near smaller tributaries and streams.{"\n"}
        - Pelmadulla: Regions with poor drainage systems.{"\n"}
      </Text>
      <Image
                    source={{
                      uri: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/ftadmin/wp-content/uploads/2017/05/29014236/IN-425.jpg",
                    }}
                    style={styles.image}
                  />
    </ScrollView>
  );
};

export default FloodScreen;

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
    color: "#ff6347", // Tomato red for emphasis
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
    marginBottom: 20,
  },
  Image: {
    width: "100%",
    height: 200, // Fixed height for the image
    resizeMode: "cover",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
});

