import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const DroughtScreen = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Main Title */}
      <Text style={styles.title}>Droughts - Sabaragamuwa Province</Text>

      {/* What is a Drought? */}
      <Text style={styles.subtitle}>What is a Drought?</Text>
      <Text style={styles.text}>
        A drought is a prolonged period of below-average rainfall leading to water shortages. In the
        Sabaragamuwa Province, droughts can severely impact agriculture and water supply.
      </Text>

      {/* Drought Prevention Tips */}
      <Text style={styles.subtitle}>Drought Prevention Tips</Text>
      <Text style={styles.text}>
        - Conserve water by fixing leaks and using water-efficient appliances.{"\n"}
        - Collect rainwater for irrigation and household use.{"\n"}
        - Plant drought-resistant crops.{"\n"}
        - Follow water rationing guidelines during droughts.
      </Text>

      {/* Emergency Contacts */}
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.text}>National Disaster Management Center: 117</Text>
      <Text style={styles.text}>Sabaragamuwa Provincial Disaster Management Unit: +94 123 456 789</Text>
      <Text style={styles.text}>Local Police Station: +94 912 222 333</Text>

      {/* Additional Information */}
      <Text style={styles.subtitle}>Common Drought-Prone Areas in Sabaragamuwa</Text>
      <Text style={styles.text}>
        - Ratnapura District: Agricultural regions dependent on rainfall.{"\n"}
        - Balangoda: Areas with limited access to water sources.{"\n"}
        - Pelmadulla: Regions with poor irrigation systems.
      </Text>
       <Image
              source={{
                uri: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_eaee8ace98.jpg",
              }}
              style={styles.image}
            />
    </ScrollView>
    
  );
};

export default DroughtScreen;

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