//disaster page (original one is now index)


import React from "react";
import { View, Text, ScrollView, StyleSheet, Image,  TouchableOpacity } from "react-native";

// DisasterCard Component
const DisasterCard: React.FC<{ name: string; image?: any }> = ({ name, image }) => {
  return (
    <View style={cardStyles.card}>
      {image && <Image source={image} style={cardStyles.image} />}
      <Text style={cardStyles.cardText}>{name}</Text>
    </View>
  );
};

// ExploreScreen Component
const ExploreScreen: React.FC = () => {
  // Hardcoded list of disasters with local images
  const disasters = [
    { name: "Flood", image: require("../../../../../assets/disasters/flood.jpg") },
    { name: "Earthquake", image: require("../../../../../assets/disasters/earthquake.jpg") },
    { name: "Hurricane", image: require("../../../../../assets/disasters/hurricane.jpg") },
    { name: "Wildfire", image: require("../../../../../assets/disasters/wildfire.jpg") },
    { name: "Landslide", image: require("../../../../../assets/disasters/landslide.jpg") },
    { name: "Drought", image: require("../../../../../assets/disasters/drought.jpg") },
    // { name: "Man-Made", image: require("../../../../../assets/disasters/manmade.jpg") },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { color: "gray" }]}>Explore Disasters</Text>
      <View style={styles.grid}>
        {disasters.map((disaster, index) => (
          <DisasterCard key={index} name={disaster.name} image={disaster.image} />
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

// screens/explorer.js






// import { Tabs } from "expo-router";
// import React from "react";
// import { Pressable } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";

// export default function AppLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: true,
//         headerLeft: () => (
//           <Pressable
//             onPress={() => console.log("Open Drawer (example)")}
//             style={{ marginLeft: 16 }}
//           >
//             <Ionicons name="menu" size={24} color="black" />
//           </Pressable>
//         ),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explorer"
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? "map" : "map-outline"} size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="weather"
//         options={{
//           title: "Weather",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? "cloudy" : "cloud-outline"} size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="info"
//         options={{
//           title: "Info",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "information-circle" : "information-circle-outline"}
//               size={24}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="disaster-details"
//         options={{ title: "Disaster Details" }}
//       />
//     </Tabs>
//   );
// }



// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useRouter } from "expo-router"; // Use this to navigate between pages

// const disasters = [
//   { id: 1, name: "Earthquake" },
//   { id: 2, name: "Flood" },
//   { id: 3, name: "Hurricane" },
//   { id: 4, name: "Wildfire" },
//   { id: 5, name: "Tornado" },
// ];

// export default function Explorer() {
//   const router = useRouter();

//   // Handle navigation when a disaster is clicked
//   const handleDisasterClick = (disasterName: string) => {
//     // Navigate to the disaster details page and pass the disaster name as a parameter
//     router.push(`/disaster-details?disaster=${disasterName}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Natural Disasters</Text>
//       {disasters.map((disaster) => (
//         <TouchableOpacity
//           key={disaster.id}
//           style={styles.item}
//           onPress={() => handleDisasterClick(disaster.name)}
//         >
//           <Text style={styles.itemText}>{disaster.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
//   item: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#f2f2f2",
//     borderRadius: 8,
//   },
//   itemText: { fontSize: 18 },
// });
