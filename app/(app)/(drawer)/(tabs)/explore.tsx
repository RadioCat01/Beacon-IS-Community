import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// Define valid disaster names
type DisasterName = "flood" | "earthquake" | "hurricane" | "wildfire" | "landslide" | "drought";

// DisasterCard Component
const DisasterCard: React.FC<{ name: string; image?: any; onPress?: () => void }> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyles.card}>
      {image && <Image source={image} style={cardStyles.image} />}
      <Text style={cardStyles.cardText}>{name}</Text>
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
      <Text style={[styles.title, { color: "gray" }]}>Explore Disasters</Text>
      <View style={styles.grid}>
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

// Styles for DisasterCard
const cardStyles = StyleSheet.create({
  card: {
    width: "48%", // Two cards per row
    aspectRatio: 4 / 3, // Ensures consistent height
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});

export default ExploreScreen;

