// import React from "react";
import { Stack } from "expo-router";

export default function ExplorerLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Explore",
        }}
      />
      <Stack.Screen
        name="disasterDetailPage" // Ensure the name is consistent here
        options={{
          title: "Disaster Details",
        }}
      />
    </Stack>
  );
}
