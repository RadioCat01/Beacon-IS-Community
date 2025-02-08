import React from "react";
import Lottie from "lottie-react-native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// Import the rain animation JSON file using a relative path
import rain from "./rain.json"; // Adjusted path

const TabsIndexScreen = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true, // Enable autoplay
    animationData: rain, // Import animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet", // Change to 'meet' to preserve aspect ratio without zooming
    },
  };

  // Dummy disaster data for cards
  const disasterData = [
    { id: 1, title: "Flood Warning", description: "Heavy rains causing flooding in the area.", type: "Flood" },
    { id: 2, title: "Earthquake Alert", description: "Magnitude 6.5 earthquake detected near the coast.", type: "Earthquake" },
    { id: 3, title: "Tornado Warning", description: "Tornado spotted in the southern region. Stay safe.", type: "Tornado" },
    { id: 4, title: "Heatwave Warning", description: "High temperatures expected over the next 48 hours.", type: "Heatwave" },
    { id: 5, title: "Wildfire Update", description: "Wildfire spreading near the national park. Evacuations ongoing.", type: "Wildfire" },
    { id: 6, title: "Hurricane Advisory", description: "Category 3 hurricane approaching the coastline.", type: "Hurricane" },
    { id: 7, title: "Flood Level Report", description: "Flood levels rising in the river. Evacuate areas at risk.", type: "Flood" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <View style={{ position: "relative", minHeight: "100%" }}>
        {/* Top Section with animated rain background */}
        <View style={{ position: "absolute", inset: 0 }}>
          <Lottie 
            loop={defaultOptions.loop} 
            autoPlay={defaultOptions.autoplay} 
            source={defaultOptions.animationData} 
            style={{ height: "100%", width: "100%" }} 
          />
        </View>
        {/* Hero Section */}
        <View style={{ position: "relative", zIndex: 10, justifyContent: "center", alignItems: "center", height: 400, backgroundColor: "rgba(0, 0, 0, 0.3)", paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 40, fontWeight: "600", marginBottom: 24, color: "#fff", textAlign: "center" }}>Disaster Management Hub</Text>
          <Text style={{ fontSize: 18, marginBottom: 24, color: "#fff", textAlign: "center" }}>
            Stay informed and report disasters for better management.
          </Text>
          <TouchableOpacity 
            style={{
              paddingHorizontal: 32,
              paddingVertical: 12,
              backgroundColor: "#e74c3c",
              borderRadius: 50,
            }}
            aria-label="Submit a disaster report"
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Stay Informed</Text>
          </TouchableOpacity>
        </View>
        {/* Real-time Disaster Data Feed Section */}
        <View style={{ zIndex: 10, marginTop: 30, paddingHorizontal: 16 }}> {/* Reduced marginTop */}
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff", marginBottom: 16 }}>Real-time Disaster Alerts</Text>
          {/* Horizontal Scrolling Container */}
          <ScrollView 
            horizontal 
            contentContainerStyle={{ flexDirection: "row", paddingVertical: 16 }} 
            nestedScrollEnabled={true} // Enable nested scrolling
          >
            {disasterData.map((disaster) => (
              <View key={disaster.id} style={{ backgroundColor: "#2c3e50", borderRadius: 8, padding: 16, width: 256, marginRight: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#e74c3c" }}>{disaster.title}</Text>
                <Text style={{ fontSize: 14, color: "#bdc3c7", marginTop: 8 }}>{disaster.description}</Text>
                <View style={{ marginTop: 16, backgroundColor: "#e74c3c", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 16 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
                    {disaster.type}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default TabsIndexScreen;
