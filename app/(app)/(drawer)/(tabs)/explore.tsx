import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

// Define disaster names
type DisasterName = "flood" | "earthquake" | "hurricane" | "wildfire" | "landslide" | "drought";

// DisasterCard Component
const DisasterCard: React.FC<{ name: string; image?: any; onPress?: () => void }> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyles.card}>
      {/* Card Content */}
      <View style={cardStyles.imageContainer}>
        {/* Image */}
        <Image source={image} style={cardStyles.image} />
        {/* Gradient Overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.6)"]} // Gradient for contrast
          style={cardStyles.overlay}
        />
        {/* Title and Subtitle */}
        <Text style={cardStyles.cardTitle}>{name}</Text>
        <Text style={cardStyles.cardSubtitle}>Learn more about this disaster</Text>
      </View>
    </TouchableOpacity>
  );
};

// ExploreScreen Component
const ExploreScreen: React.FC = () => {
  const router = useRouter();

  // Hardcoded list of disasters with local images
  const disasters = [
    { name: "Flood", image: require("../../../../assets/disasters/flood.jpg") },
    { name: "Earthquake", image: require("../../../../assets/disasters/earthquake.jpg") },
    { name: "Hurricane", image: require("../../../../assets/disasters/hurricane.jpg") },
    { name: "Wildfire", image: require("../../../../assets/disasters/wildfire.jpg") },
    { name: "Landslide", image: require("../../../../assets/disasters/landslide.jpg") },
    { name: "Drought", image: require("../../../../assets/disasters/drought.jpg") },
  ];

  // Function to handle card press and navigate to the corresponding screen
  const handleCardPress = (disasterName: DisasterName) => {
    const route = `/${disasterName.toLowerCase()}` as const; // Ensure type safety
    router.push(route); // Navigate to the disaster screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Title */}
      <Text style={styles.title}>Explore Disasters</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Stay informed and prepared by learning about different types of disasters.
      </Text>

      {/* List of Cards */}
      <View style={styles.cardList}>
        {disasters.map((disaster, index) => (
          <DisasterCard
            key={index}
            name={disaster.name}
            image={disaster.image}
            onPress={() => handleCardPress(disaster.name as DisasterName)} // Cast to DisasterName
          />
        ))}
      </View>
    </ScrollView>
  );
};

// Styles for ExploreScreen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  cardList: {
    flexDirection: "column", // Single column layout
    gap: 16, // Space between cards
  },
});

// Styles for DisasterCard
const cardStyles = StyleSheet.create({
  card: {
    width: "100%", // Full-width card
    height: 250, // Fixed height for the card
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden", // Clip child elements within the card
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    position: "relative", // Allows absolute positioning of overlay and text
  },
  image: {
    width: "100%",
    height: "100%", // Image takes up the full card height
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%", // Gradient covers the bottom half of the image
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    bottom: 50,
    left: 16,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#fff",
    position: "absolute",
    bottom: 20,
    left: 16,
  },
});

export default ExploreScreen;

